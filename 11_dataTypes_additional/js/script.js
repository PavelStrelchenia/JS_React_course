"use strict";

const arr = ["a", "b", "c"];

arr[10] = "3456";

console.log(arr[10]); // '3456'
console.log(arr); // [ 'a', 'b', 'c', <7 empty items>, '3456' ]

const arrObj = {
    0: "a",
    a: "a1",
    1: "b",
    2: "c",
    abc: {
        df: [{}, {}],
        def: {},
    },
};

console.log(arr[1]); // 'b'
console.log(arrObj[0]); // 'a'
console.log(arrObj.a); // 'a1'

// arrObj.b = "1234";

const b = "b";

arrObj[b] = "1234";

console.log(arrObj.b); // 1234
console.log(arrObj["b"]); // 1234

// const obj = { a: 1, b: 2, c: 3 };

const obj = {
    Anna: 500,
    Alice: 800,
};
