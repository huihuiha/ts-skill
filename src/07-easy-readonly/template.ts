export type MyReadonly<T> = {
    readonly [K in keyof T]: T[K]
};


// js 实现
function MyReadonly (todo) {
    for (let key in todo) {
        Object.defineProperty(todo, key, {
            set (value) {
                throw new Error('只读属性，不可修改');
            }
        })
    }
}

// 1. 遍历对象属性
// 2. 将对象属性变成只读属性