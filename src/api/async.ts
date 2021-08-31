import { Storage } from './scheme';

export enum Status {
  pending = 'pending',
  resolved = 'resolved',
  rejected = 'rejected',
  idle = 'idle'
}

export enum Cause {
  reset = 'reset'
}

export type Meta<Signature> = {
  status: Status;
  data: Signature;
  error: any;
};

export type StorageMeta<Signature> = Meta<Signature> & {
  _type?: Storage;
  _key?: string;
  _suffix?: string;
};

export interface Helper<Signature> {
  setData: (value: Signature) => void;
  setError: (value: any) => void;
  run: (promise: Promise<Signature>, preserve?: boolean) => void;
  reset: () => void;
}

export type Action<Signature> =
  | { type: Status.resolved; data: Signature }
  | { type: Status.rejected; error: any; data: Signature }
  | { type: Status.pending; preserve: boolean; data: Signature }
  | { type: Cause.reset; data: Signature };

export type Initializer<Signature> = {
  status: Status.idle;
  data: Signature,
  error: any,
  _suffix: string,
  _key: string,
  _type: Storage,
};