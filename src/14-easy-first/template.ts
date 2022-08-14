export type First<T extends unknown[]> = T extends [] ? never : T[0]
//or type First<T extends unknown[]> = T extends { length: 0 } ? never : T[0]
//or type First<T extends unknown[]> = T['length'] extends 0 ? never : T[0]
//or type First<T extends unknown[]> = T extends [infer First, ...any] ? First : never