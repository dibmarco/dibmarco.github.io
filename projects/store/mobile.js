"use strict";

const bfBlack = document.querySelector(".bf-black");
const bfWhite = document.querySelector(".bf-white");
const mtBlack = document.querySelector(".mt-black");
const mtCharcoal = document.querySelector(".mt-charcoal");

const bfBag = document.querySelector(".bf-bag");
const mtBag = document.querySelector(".mt-bag");

const bag = document.querySelectorAll(".blah");


const bfFrame = document.querySelector(".blackflag");
const mtFrame = document.querySelector(".metallica");

const aside1 = document.querySelector(".aside1");
const shirtName = document.querySelector(".asideshirtname");
const selectedShirt = document.querySelector(".selected-tshirt");
const cancelBtn = document.querySelector(".cancel");

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
  shirtColor = 0;
  if (shirtColor === 0) {
    mtFrame.style.backgroundImage = "url('img/metallica_black.jpg')";
  };
}
function changeColorMTCharcoal () {
    shirtColor = 1
    if (shirtColor === 1) {
      mtFrame.style.backgroundImage = "url('img/metallica_charcoal.jpg')";
    }
};

bfBlack.addEventListener("click", changeColorBFBlack);
bfWhite.addEventListener("click", changeColorBFWhite);

mtBlack.addEventListener("click", changeColorMTBlack);
mtCharcoal.addEventListener("click", changeColorMTCharcoal);

for (let i = 0; i < bag.length; i++)
  bag[i].addEventListener("click", function (event) {

  let bandName;

  if (event.target.classList.contains("bf-bag")) {
    bandName = "black flag";
    shirtName.textContent = `Black Flag T-Shirt`;
  } else {
    bandName = "metallica";
    shirtName.textContent = `Metallica T-Shirt`;
  }

  if (bandName === "black flag" && shirtColor === 0) {
    selectedShirt.style.backgroundImage = "url('img/blackflag_black.jpg')";
  } 
  
  if (bandName === "black flag" && shirtColor === 1) {
    selectedShirt.style.backgroundImage = "url('img/blackflag_white.jpg')";
  }

  if (bandName === "metallica" && shirtColor === 0) {
    selectedShirt.style.backgroundImage = "url('img/metallica_black.jpg')";
  } 
  
  if (bandName === "metallica" && shirtColor === 1) {
    selectedShirt.style.backgroundImage = "url('img/metallica_charcoal.jpg')";
  }

  console.log(bandName);
  console.log(shirtColor)
  
  aside1.style.transform = "translateX(0%)";
});

function cancel() {
  aside1.style.transform = "translateX(100%)";
  shirtColor = 0;
  bfFrame.style.backgroundImage = "url('img/blackflag_black.jpg')";
  mtFrame.style.backgroundImage = "url('img/metallica_black.jpg')";
}

cancelBtn.addEventListener("click", cancel);