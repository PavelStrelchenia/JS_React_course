"use strict";

// Место для первой задачи
function calculateVolumeAndArea(length) {
  if (typeof length !== "number" || length <= 0 || !Number.isInteger(length)) {
    return "При вычислении произошла ошибка";
  } else {
    const v = length * length * length;
    const s = 6 * (length * length);
    return `Объем куба: ${v}, площадь всей поверхности: ${s}`;
  }
}

console.log(calculateVolumeAndArea(5.5));

// Место для второй задачи
function getCoupeNumber(num) {
  if (typeof num !== "number" || num < 0 || !Number.isInteger(num)) {
    return "Ошибка. Проверьте правильность введенного номера места";
  } else if (num === 0 || num > 36) {
    return "Таких мест в вагоне не существует";
  } else {
    return Math.ceil(num / 4);
  }
}

console.log(getCoupeNumber(33));
