type MyExclude<T, U> = T extends U ? never : T;

export type MyOmit<T, K extends keyof T> = {
    [P in MyExclude<keyof T, K>] : T[P]
};

