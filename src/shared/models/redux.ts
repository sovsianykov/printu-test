import { Nullable } from "./general";

export interface AsyncSlice<T> {
  data: Nullable<T>;
  loading: boolean;
  error: Nullable<string>;
}
