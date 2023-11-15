"use strict";

const bfBlack = document.querySelector(".bf-black");
const bfWhite = document.querySelector(".bf-white");
const mtBlack = document.querySelector(".mt-black");
const mtCharcoal = document.querySelector(".mt-charcoal");
const bfBag = document.querySelector(".bf-bag");

const bfFrame = document.querySelector(".blackflag");
const mtFrame = document.querySelector(".metallica");

const aside1 = document.querySelector(".aside1");
const shirtName = document.querySelector(".asideshirtname");
const selectedShirt = document.querySelector(".selected-tshirt");

let shirtColor = 0;

function changeColorBFBlack () {
    shirtColor = 0;
    if (shirtColor === 0) {
    bfFrame.style.backgroundImage = "url('img/blackflag_black.jpg')";
    };
}

function changeColorBFWhite () {
    shirtColor = 1
    if (shirtColor === 1) {
      bfFrame.style.backgroundImage = "url('img/blackflag_white.jpg')";
    }
};

function changeColorMTBlack () {
    mtFrame.style.backgroundImage = "url('img/metallica_black.jpg')";
}
function changeColorMTCharcoal () {
    mtFrame.style.backgroundImage = "url('img/metallica_charcoal.jpg')";
};

bfBlack.addEventListener("click", changeColorBFBlack);
bfWhite.addEventListener("click", changeColorBFWhite);

mtBlack.addEventListener("click", changeColorMTBlack);
mtCharcoal.addEventListener("click", changeColorMTCharcoal);

bfBag.addEventListener("click", function () {
  let bag = {
    shirtBag: shirtColor,
  };
  console.log(bag.shirtBag);
  aside1.style.transform = "translateX(0%)";

  if (bag.shirtBag === 0) {
    selectedShirt.style.backgroundImage = "url('img/blackflag_black.jpg')";
  } else {
    selectedShirt.style.backgroundImage = "url('img/blackflag_white.jpg')";
  }
});