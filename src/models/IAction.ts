export interface IAction<T> {
  loading?: boolean;
  error?: boolean;
  payload: T;
  type: string;
}
