"use strict";

const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5,
        },
        {
            width: 15,
            length: 7,
        },
        {
            width: 20,
            length: 5,
        },
        {
            width: 8,
            length: 10,
        },
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000,
};

// function isBudgetEnough(data) {
//     let w = [];
//     let l = [];
//     let s = [];
//     let allS = 0;
//     let v = 0;
//     data.shops.forEach((element, i) => {
//         w.push(element.width);
//         l.push(element.length);
//     });
//     for (let i = 0; i < w.length; i++) {
//         s.push(w[i] * l[i]);
//     }
//     for (let i = 0; i < s.length; i++) {
//         allS = allS + s[i];
//     }
//     v = allS * data.height;

//     let result = data.moneyPer1m3 * v;

//     if (result < data.budget) {
//         return "Бюджета достаточно";
//     } else {
//         return "Бюджета недостаточно";
//     }

// }

function isBudgetEnough(data) {
    let square = 0;
    let volume = 0;

    data.shops.forEach((shop) => {
        square += shop.width * shop.length;
    });

    volume = data.height * square;

    if (data.budget - volume * data.moneyPer1m3 >= 0) {
        return "Бюджета достаточно";
    } else {
        return "Бюджета недостаточно";
    }
}
