"use strict";

const students = [
    "Peter",
    "Andrew",
    "Ann",
    "Mark",
    "Josh",
    "Sandra",
    "Cris",
    "Bernard",
    "Takesi",
    "Sam",
];

// function sortStudentsByGroups(arr) {
//     arr.sort();
//     let firstGroup = [arr.slice(0, 3)];
//     let secondGroup = [arr.slice(3, 6)];
//     let thirdGroup = [arr.slice(6, 9)];
//     let newArr = [firstGroup, secondGroup, thirdGroup];
//     if (arr.length <= 9) {
//         newArr.push("Оставшиеся студенты: -");
//     } else {
//         newArr.push(`Оставшиеся студенты: ${arr.slice(9)}`);
//     }
//     return newArr;
// }

// console.log(sortStudentsByGroups(students));
function sortStudentsByGroups(arr) {
    arr.sort();
    const a = [],
        b = [],
        c = [],
        rest = [];

    for (let i = 0; i < arr.length; i++) {
        if (i < 3) {
            a.push(arr[i]);
        } else if (i < 6) {
            b.push(arr[i]);
        } else if (i < 9) {
            c.push(arr[i]);
        } else {
            rest.push(arr[i]);
        }
    }
    return [
        a,
        b,
        c,
        `Оставшиеся студенты: ${rest.length === 0 ? "-" : rest.join(", ")}`,
    ];
}
