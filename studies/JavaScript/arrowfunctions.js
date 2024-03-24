"use strict";

// function sum(a, b) {
//     return a + b
// };

// function isPositive(number) {
//     return number >= 0
// };

// function randomNumber() {
//     return Math.random
// };

// document.addEventListener("click", function() {
//     console.log("Click");
// });


////////////
function sum(a, b) {
    return a + b
};

let sum2 = (a, b) => {
    return a + b
};

let sum3 = (a, b) => a + b;

console.log(sum3(2, 3));
////////////

////////////
function isPositive(number) {
    return number >= 0
};

let isPositive2 = (number) => {
    return number >= 0
};

let isPositive3 = (number) => number >= 0;

console.log(isPositive(3));
////////////


////////////
function randomNumber() {
    return Math.random
};

let randomNumber2 = () => {
    return Math.random
};

let randomNumber3 = () => Math.random;
////////////


////////////
document.addEventListener("click", function() {
    console.log("Click");
});

document.addEventListener("click", () => {
    console.log("Click");
});

document.addEventListener("click", () => console.log("Click"));
////////////

document.addEventListener("click", function(e) {
    console.log(e)
})

