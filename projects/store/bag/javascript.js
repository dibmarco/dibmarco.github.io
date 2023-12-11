"use strict";

// Elements
const tshirtImage = document.querySelector(".selected_tshirt");
const color = document.getElementById("color");
const size = document.getElementById("size");
const quantity = document.getElementById("quantity");

const addToBagBtn = document.querySelector(".btn_addtobag");

// Resettable variables
let tshirtColor = "black";
let tshirtSize = "small";
let tshirtQty = 1;

// Event handlers
color.addEventListener("change", function () {
  tshirtColor = this.value;
  tshirtImage.src = `../img/blackflag_${tshirtColor}.jpg`;
});

size.addEventListener("change", function () {
  tshirtSize = this.value;
});

quantity.addEventListener("change", function () {
  tshirtQty = this.value;
});

addToBagBtn.addEventListener("click", function () {
    console.log(tshirtColor);
    console.log(tshirtSize);
    console.log(tshirtQty);

  window.location = "bag.html";
});