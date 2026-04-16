"use strict";

// Место для первой задачи
function getTimeFromMinutes(num) {
  let hours = Math.floor(num / 60);
  let minute = num - hours * 60;
  let str = "час";
  if (typeof num !== "number" || !Number.isInteger(num) || num < 0) {
    return "Ошибка, проверьте данные";
  } else if (hours > 1 && hours < 5) {
    str = "часа";
  } else if ((hours >= 5 && hours <= 10) || hours === 0) {
    str = "часов";
  }
  return `Это ${hours} ${str} и ${minute} минут`;
}

console.log(getTimeFromMinutes(120));

// Место для второй задачи
function findMaxNumber(a, b, c, d) {
  
}
