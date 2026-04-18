"use strict";

const someString = "This is some strange string";

function reverse(str) {
    if (typeof str !== "string") {
        return "Ошибка!";
    } else {
        let arr = [];
        for (let i = 0; i < str.length; i++) {
            arr.push(str[i]);
        }
        return arr.reverse().join("");
    }
}

const baseCurrencies = ["USD", "EUR"];
const additionalCurrencies = ["UAH", "RUB", "CNY"];

function availableCurr(arr, missingCurr) {
    let str = "";

    arr.length === 0
        ? (str = "Нет доступных валют")
        : (str = "Доступные валюты:\n");

    arr.forEach((curr) => {
        if (curr !== missingCurr) {
            str += `${curr}\n`;
        }
    });

    return str;
}
