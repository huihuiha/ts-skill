export type TupleToObject<T extends readonly any[]> = {
  [value in T[number]]: value;
};