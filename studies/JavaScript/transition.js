"use strict";

const buttonLeft = document.querySelector(".btnLeft");
/* const buttonRight = document.querySelector(".btnRight"); */
const blue = document.querySelector(".blue");
const green = document.querySelector(".green");
const red = document.querySelector(".red");

let image = 0;

function transformLeft() {
    image++;
    console.log(image);
    //posição 2
    if (image > 0) {
        red.style.zIndex = "0";
        green.style.zIndex = "1";
        green.classList.add("transform-left");
        /* blue.classList.remove("transform-left"); */
    }
    //posição 3
    if (image > 1) {
        green.style.zIndex = "0";
        blue.style.zIndex = "1";
        blue.classList.add("transform-left");
        red.classList.add("position-right");
        green.classList.remove("transform-left");
    }
    //posição 1
    if (image > 2) {
        blue.style.zIndex = "0";
        red.style.zIndex = "1";
        red.classList.add("transform-left");
        green.classList.add("position-right");
    }
    if (image >= 3) {
        /* green.classList.add("position-right");
        blue.style.zIndex = "0";
        red.style.zIndex = "1";
        red.classList.add("transform-left"); */
        image = 0;
    }
}

/* function transformRight() {
    image++;
    if (image > 0) {
        green.classList.remove("transform-left");
    }
    if (image > 1) {
        blue.classList.remove("transform-left");
    }
    if (image > 2) {
        image = 0;
    }
    console.log(image);
} */

buttonLeft.addEventListener("click", transformLeft);
/* buttonRight.addEventListener("click", transformRight); */