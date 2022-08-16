export type MyExclude<T, U> = T extends U ? never : T;



// type A = ['A', 'B', 'C'];
// type B = ['A', 'C'];

// type G = MyExclude<A, B>

// type C = A extends B ? 2 : A;
// type D = B extends A ? 1 : B;