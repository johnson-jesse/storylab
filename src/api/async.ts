export enum Status {
  pending = 'pending',
  resolved = 'resolved',
  rejected = 'rejected',
  idle = 'idle'
}

export enum Cause {
  reset = 'reset'
}

export type Meta<S> = {
  status: Status;
  data: S;
  error: any;
};

export interface Helper<S> {
  setData: (value: S) => void;
  setError: (value: any) => void;
  run: (promise: Promise<S>, preserve?: boolean) => void;
  reset: () => void;
}

export type Action<S> =
  | { type: Status.resolved; data: S }
  | { type: Status.rejected; error: any; data: S }
  | { type: Status.pending; preserve: boolean; data: S }
  | { type: Cause.reset; data: S };

export type Initializer<S> = {
  status: Status.idle;
  data: S,
  error: any,
  _suffix: string,
  _key: string,
  _type: Storage,
};