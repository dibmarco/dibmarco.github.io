"use strict";

// landing page
const bfBlack = document.querySelector(".bf-black");
const bfWhite = document.querySelector(".bf-white");
const mtBlack = document.querySelector(".mt-black");
const mtCharcoal = document.querySelector(".mt-charcoal");

const bfBag = document.querySelector(".bf-bag");
const mtBag = document.querySelector(".mt-bag");

const bag = document.querySelectorAll(".blah");


const bfFrame = document.querySelector(".blackflag");
const mtFrame = document.querySelector(".metallica");

// aside1
const aside1 = document.querySelector(".aside1");
const shirtName = document.querySelector(".asideshirtname");
const selectedShirt = document.querySelector(".selected-tshirt");
const cancelBtn = document.querySelector(".cancel");
const size = document.getElementById("size");
const quantity = document.getElementById("quantity");

const asideColor0 = document.querySelector(".aside-color0");
const asideColor1 = document.querySelector(".aside-color1");

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

let bandName;

for (let i = 0; i < bag.length; i++)
  bag[i].addEventListener("click", function (event) {

  if (event.target.classList.contains("bf-bag")) {
    bandName = "black flag";
    shirtName.textContent = `Black Flag T-Shirt`;
  } else {
    bandName = "metallica";
    shirtName.textContent = `Metallica T-Shirt`;
  }

  if (bandName === "black flag" && shirtColor === 0) {
    selectedShirt.style.backgroundImage = "url('img/blackflag_black.jpg')";
    asideColor0.style.backgroundColor = "black";
    asideColor1.style.backgroundColor = "white";
    asideColor0.textContent = "✓";
    asideColor1.textContent = "";
  } 
  
  if (bandName === "black flag" && shirtColor === 1) {
    selectedShirt.style.backgroundImage = "url('img/blackflag_white.jpg')";
    asideColor0.style.backgroundColor = "black";
    asideColor1.style.backgroundColor = "white";
    asideColor1.style.color = "black";
    asideColor0.textContent = "";
    asideColor1.textContent = "✓";
  }

  if (bandName === "metallica" && shirtColor === 0) {
    selectedShirt.style.backgroundImage = "url('img/metallica_black.jpg')";
    asideColor0.style.backgroundColor = "black";
    asideColor1.style.backgroundColor = "darkblue";
    asideColor0.textContent = "✓";
    asideColor1.textContent = "";
  } 
  
  if (bandName === "metallica" && shirtColor === 1) {
    selectedShirt.style.backgroundImage = "url('img/metallica_charcoal.jpg')";
    asideColor0.style.backgroundColor = "black";
    asideColor1.style.backgroundColor = "darkblue";
    asideColor0.textContent = "";
    asideColor1.style.color = "white";
    asideColor1.textContent = "✓";
  }

  console.log(bandName);
  console.log(shirtColor)
  
  aside1.style.transform = "translateX(0%)";
});

asideColor0.addEventListener("click", function() {
  /* console.log(bandName) */
  if (bandName === "black flag") {
    selectedShirt.style.backgroundImage = "url('img/blackflag_black.jpg')";
    asideColor0.textContent = "✓";
    asideColor1.textContent = "";
    shirtColor = 0;
  }
  if (bandName === "metallica") {
    selectedShirt.style.backgroundImage = "url('img/metallica_black.jpg')";
    asideColor0.textContent = "✓";
    asideColor1.textContent = "";
    shirtColor = 0;
  }
  console.log(bandName, shirtColor);
});

asideColor1.addEventListener("click", function () {
  if (bandName === "black flag") {
    selectedShirt.style.backgroundImage = "url('img/blackflag_white.jpg')";
    asideColor0.textContent = "";
    asideColor1.textContent = "✓";
    asideColor1.style.color = "black";
    shirtColor = 1;
  }
  if (bandName === "metallica") {
    selectedShirt.style.backgroundImage = "url('img/metallica_charcoal.jpg')";
    asideColor0.textContent = "";
    asideColor1.textContent = "✓";
    asideColor1.style.color = "white";
    shirtColor = 1;
  }
  console.log(bandName, shirtColor);
});

let shirtSize;

size.addEventListener("change", function () {
  shirtSize = this.value;
  console.log(shirtSize);
});

let shirtQuantity;

quantity.addEventListener("change", function () {
  shirtQuantity = this.value;
  console.log(shirtQuantity);
});

function cancel() {
  aside1.style.transform = "translateX(100%)";
  shirtColor = 0;
  bfFrame.style.backgroundImage = "url('img/blackflag_black.jpg')";
  mtFrame.style.backgroundImage = "url('img/metallica_black.jpg')";
  size.value = "small";
  quantity.value = 1;
}

cancelBtn.addEventListener("click", cancel);