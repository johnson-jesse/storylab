import React from 'react';
import { Action, Cause, Helper, Meta, Status } from './async';
import useSafeDispatch from './useSafeDispatch';

function asyncReducer<Signature>(state: Meta<Signature>, action: Action<Signature>): Meta<Signature> {
  switch (action.type) {
    case Status.pending: {
      return {
        status: action.type,
        data: action.preserve ? state.data : action.data,
        error: null
      };
    }
    case Status.resolved: {
      return { status: action.type, data: action.data, error: null };
    }
    case Status.rejected: {
      return {
        status: action.type,
        error: action.error,
        data: action.data
      };
    }
    case Cause.reset: {
      return { status: Status.idle, data: action.data, error: null };
    }
    default: {
      throw new Error(`Unhandled action type: ${action['type']}`);
    }
  }
}

/**
 * Used for async api calls. Unmount safe.
 *
 * @param initialData - initial and fallback data when things go awry
 */
export function useAsync<Signature>(initialData: Signature = null): Meta<Signature> & Helper<Signature> {
  const [state, unsafeDispatch] = React.useReducer<React.Reducer<Meta<Signature>, Action<Signature>>>(
    asyncReducer, 
    {
      status: Status.idle,
      data: initialData,
      error: null
    }
  );

  const dispatch = useSafeDispatch(unsafeDispatch);
  const { data, error, status } = state;

  const run = React.useCallback(
    (promise, preserve = false) => {
      dispatch({ type: Status.pending, preserve, data: initialData });
      promise.then(
        (data: any) => {
          if (data && data.canceled) dispatch({ type: Status.pending, preserve, data: initialData });
          else dispatch({ type: Status.resolved, data: data || initialData });
        },
        (error: any) => dispatch({ type: Status.rejected, error, data: initialData })
      );
    },
    [dispatch, initialData]
  );

  const setData = React.useCallback(data => dispatch({ type: Status.resolved, data }), [dispatch]);
  const setError = React.useCallback(error => dispatch({ type: Status.rejected, error, data: initialData }), [
    dispatch,
    initialData
  ]);
  const reset = React.useCallback(() => dispatch({ type: Cause.reset, data: initialData }), [dispatch, initialData]);

  return {
    setData,
    setError,
    error,
    status,
    data,
    run,
    reset
  };
}
