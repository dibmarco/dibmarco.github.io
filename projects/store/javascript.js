"use strict";

const shirtPhoto = document.querySelector(".black-white");
const buyBtn = document.querySelector(".buy");
let color = "black";
let size = "small";
let quantity = 1;
const price = 30;

document.getElementById("color").addEventListener("change", function () {
  color = this.value;
  shirtPhoto.src = `img/tshirt_${color}.jpg`;
  // console.log(color);
});

document.getElementById("size").addEventListener("change", function () {
  size = this.value;
  // console.log(size);
});

document.getElementById("quantity").addEventListener("change", function () {
  quantity = this.value;
  // console.log(quantity);
});

function buy() {
  const order = {
    colorOrder: color,
    sizeOrder: size,
    quantityOrder: quantity,
    priceOrder: quantity * price,
  };

  // console.log(color, size, quantity);
  console.log(order);
}

buyBtn.addEventListener("click", buy);

// #2
// const shirtPhoto = document.querySelector(".black-white");
// const buyBtn = document.querySelector(".buy");
// let color;

// document.getElementById("color").addEventListener("change", function () {
//   color = this.value;
//   shirtPhoto.src = `img/tshirt_${color}.jpg`;
// //   console.log(color);
// });

// function buy() {
//   const size = document.getElementById("size").value;
//   const quantity = document.getElementById("quantity").value;
//   let price = 30;

//   const order = {
//     colorOrder: color,
//     sizeOrder: size,
//     quantityOrder: quantity,
//     priceOrder: quantity * price,
//   };

//   console.log(order);
// }

// buyBtn.addEventListener("click", buy);

// #1
// const shirtPhoto = document.querySelector(".black-white");
// const buyBtn = document.querySelector(".buy");
// const color = document
//   .getElementById("color")
//   .addEventListener("change", function () {
//     const color = this.value;

//     shirtPhoto.src = `img/tshirt_${color}.jpg`;

//     console.log(`You selected: ${color}`);
//   });

// function buy() {
//   const size = document.getElementById("size").value;
//   const quantity = document.getElementById("quantity").value;
//   let price = 30;

//   const order = {
//     sizerOrder: size,
//     quantityOrder: quantity,
//     priceOrder: quantity * price,
//     colorOrder: color,
//   };

//   console.log(order);
// }

// buyBtn.addEventListener("click", buy);
