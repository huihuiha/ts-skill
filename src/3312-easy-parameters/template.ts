export type MyParameters<T extends (... args: any[]) => any> = T extends (...args: infer args) => void ? args : never;
