export type MyPick<T, K extends keyof T> = {
    [P in K]: T[P]
};


// js实现
// function MyPick (todo, keys: []) {
//     const obj = {};
//     keys.forEach(key => {
//         if (key in todo) {
//             obj[key] = todo[key];
//         }
//     })
//     return obj;
// }

// 实现思路
// 1. 返回一个对象
// 2. 编译 keys 值
// 3. 判断 key 值是否在原对象上
// 4. 向原对象取值