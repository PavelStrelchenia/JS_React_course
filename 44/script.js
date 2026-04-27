"use strict";

const btns = document.querySelectorAll("button");
const link = document.querySelector("a");

function deleteElement(e) {
    console.log(e.target);
    console.log(e.type);
}

btns.forEach((btn) => {
    btn.addEventListener("click", deleteElement, { once: true });
});

link.addEventListener("click", (event) => {
    event.preventDefault();
    console.log(event.target);
});
