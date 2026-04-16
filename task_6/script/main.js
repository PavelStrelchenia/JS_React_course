"use strict";

// Место для первой задачи
function sayHello(name) {
  return `Привет,${name}`;
}

// Место для второй задачи
function returnNeighboringNumbers(num) {
  return [num - 1, num, num + 1];
}

// Место для третьей задачи
function getMathResult(a, b) {
  if (typeof b !== "number" || b <= 0) {
    return a;
  }

  let str = "";

  for (let i = 1; i <= b; i++) {
    if (i === b) {
      str += `${a * i}`;
    } else {
      str += `${a * i}---`;
    }
  }
  return str;
}
