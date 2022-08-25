export type MyReadonly2<T, K extends keyof T = keyof T> = {
  [P in Exclude<keyof T, K>]: T[P];
} & {
  readonly [key in K]: T[key];
};
