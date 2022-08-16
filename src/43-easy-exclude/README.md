# Exclude

实现内置的 Exclude <T, U>类型，但不能直接使用它本身。

从联合类型 T 中排除 U 的类型成员，来构造一个新的类型。

例如：

```ts
type Result = MyExclude<"a" | "b" | "c", "a">; // 'b' | 'c'
```
