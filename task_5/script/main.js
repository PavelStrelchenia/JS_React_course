"use strict";

const lines = 5;
let result = "";

for (let i = 1; i < lines; i++) {
  for (let j = 0; j < i; j++) {
    result += "*";
  }

  result += "\n";
}

console.log(result);
