"use strict";

const bfBlack = document.querySelector(".bf-black");
const bfWhite = document.querySelector(".bf-white");
const mtBlack = document.querySelector(".mt-black");
const mtCharcoal = document.querySelector(".mt-charcoal");
const bfBag = document.querySelector(".bf-bag");

const bfFrame = document.querySelector(".blackflag");
const mtFrame = document.querySelector(".metallica");

const aside1 = document.querySelector(".aside1");

function changeColorBFBlack () {
    bfFrame.style.backgroundImage = "url('img/blackflag_black.jpg')";
}
function changeColorBFWhite () {
    bfFrame.style.backgroundImage = "url('img/blackflag_white.jpg')";
}

function changeColorMTBlack () {
    mtFrame.style.backgroundImage = "url('img/metallica_black.jpg')";
}
function changeColorMTCharcoal () {
    mtFrame.style.backgroundImage = "url('img/metallica_charcoal.jpg')";
}

function bfBagOpen () {
    aside1.style.transform = "translateX(0%)";
}

bfBlack.addEventListener("click", changeColorBFBlack);
bfWhite.addEventListener("click", changeColorBFWhite);

mtBlack.addEventListener("click", changeColorMTBlack);
mtCharcoal.addEventListener("click", changeColorMTCharcoal);

bfBag.addEventListener("click", bfBagOpen);