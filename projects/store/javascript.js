"use strict";

const shirtPhoto = document.querySelector(".black-white");
const buyBtn = document.querySelector(".buy");
const reviewOrder = document.querySelector(".review-order");
const placeOrder = document.querySelector(".place-order");
let color = "black";
let size = "small";
let quantity = 1;
const price = 30;

document.getElementById("color").addEventListener("change", function () {
  color = this.value;
  shirtPhoto.src = `img/tshirt_${color}.jpg`;
});

document.getElementById("size").addEventListener("change", function () {
  size = this.value;
});

document.getElementById("quantity").addEventListener("change", function () {
  quantity = this.value;
});

function buy() {
  const order = {
    colorOrder: color,
    sizeOrder: size,
    quantityOrder: quantity,
    priceOrder: quantity * price,
  };

  document.querySelector(".review-color").textContent = order.colorOrder;
  document.querySelector(".review-size").textContent = order.sizeOrder;
  document.querySelector(".review-quantity").textContent = order.quantityOrder;
  document.querySelector(
    ".review-price"
  ).textContent = `US$ ${order.priceOrder}`;

  reviewOrder.style.transform = "translateX(0%)";
}

buyBtn.addEventListener("click", buy);

function cancel() {
  reviewOrder.style.transform = "translateX(100%)";
}

document.querySelector(".color").addEventListener("click", cancel);
document.querySelector(".size").addEventListener("click", cancel);
document.querySelector(".tshirt-quantity").addEventListener("click", cancel);
document.querySelector(".cancel").addEventListener("click", cancel);

placeOrder.addEventListener("click", function () {
  console.log({
    colorOrder: color,
    sizeOrder: size,
    quantityOrder: quantity,
    priceOrder: quantity * price,
  });
});

// #3
// const shirtPhoto = document.querySelector(".black-white");
// const buyBtn = document.querySelector(".buy");
// const reviewOrder = document.querySelector(".review-order");
// const placeOrder = document.querySelector(".place-order");
// let color = "black";
// let size = "small";
// let quantity = 1;
// const price = 30;

// document.getElementById("color").addEventListener("change", function () {
//   color = this.value;
//   shirtPhoto.src = `img/tshirt_${color}.jpg`;
//   // console.log(color);
// });

// document.getElementById("size").addEventListener("change", function () {
//   size = this.value;
//   // console.log(size);
// });

// document.getElementById("quantity").addEventListener("change", function () {
//   quantity = this.value;
//   // console.log(quantity);
// });

// function buy() {
//   const order = {
//     colorOrder: color,
//     sizeOrder: size,
//     quantityOrder: quantity,
//     priceOrder: quantity * price,
//   };

//   document.querySelector(".review-color").textContent = order.colorOrder;
//   document.querySelector(".review-size").textContent = order.sizeOrder;
//   document.querySelector(".review-quantity").textContent = order.quantityOrder;
//   document.querySelector(".review-price").textContent = `US$ ${order.priceOrder}`;

//   reviewOrder.style.transform = "translateX(0%)";

//   // console.log(color, size, quantity);

//   placeOrder.addEventListener("click", function() {
//     console.log(order);
//   });

// };

// buyBtn.addEventListener("click", buy);

// function cancel() {
//   reviewOrder.style.transform = "translateX(100%)";
// };

// document.querySelector(".color").addEventListener("click", cancel);
// document.querySelector(".size").addEventListener("click", cancel);
// document.querySelector(".tshirt-quantity").addEventListener("click", cancel);
// document.querySelector(".cancel").addEventListener("click", cancel);

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
