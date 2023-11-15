"use strict";

const bfBlack = document.querySelector(".bf-black");
const bfWhite = document.querySelector(".bf-white");
const mtBlack = document.querySelector(".mt-black");
const mtCharcoal = document.querySelector(".mt-charcoal");

const bfFrame = document.querySelector(".blackflag");
const mtFrame = document.querySelector(".metallica");

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

bfBlack.addEventListener("click", changeColorBFBlack);
bfWhite.addEventListener("click", changeColorBFWhite);

mtBlack.addEventListener("click", changeColorMTBlack);
mtCharcoal.addEventListener("click", changeColorMTCharcoal);