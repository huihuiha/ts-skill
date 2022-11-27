type Chainable<Result = {}> = {
  get(): Result;
  option<Key extends string, Value>(
    k: Key extends keyof Result ? never : Key,
    v: Value
  ): Chainable<Omit<Result, Key> & Record<Key, Value>>;
};
