"use strict";

console.log("arr" + " - object"); // "arr - object"
console.log(4 + " - object"); // "4 - object"
console.log(4 + +"5"); // 9

let incr = 10,
    decr = 10;

// постфикс
// incr++;
// decr--;

// префикс
// ++incr;
// --decr;

console.log(++incr);
console.log(--decr);

console.log(5 % 2); // 1

console.log(2 * 4 === "8"); // false
console.log(2 * 4 == "8"); // true

// && - И true / true
// || - ИЛИ true / false

const isChecked = true,
    isClose = true,
    isTrue = false;

console.log(isChecked && isClose); // true
console.log(isChecked && isTrue); // false
console.log(isChecked || isTrue); // true

console.log(!isChecked); // false
