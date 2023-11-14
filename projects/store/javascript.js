"use strict";

const header = document.querySelector("header");
const main = document.querySelector("main");
const footer = document.querySelector("footer");
const shirtPhoto = document.querySelector(".black-white");
const buyBtn = document.querySelector(".buy");
const reviewOrder = document.querySelector(".review-order");
const placeOrder = document.querySelector(".place-order");
const overlay = document.querySelector(".overlay");
const orderPlaced = document.querySelector(".order-placed");
let color = "black";
let size = "small";
let quantity = 1;
let band;
let price;

if (document.title.toLowerCase() === "black flag t-shirt") {
  price = 30;
  band = "blackflag";
} else {
  price = 35;
  band = "metallica";
}

document.getElementById("color").addEventListener("change", function () {
  color = this.value;
  shirtPhoto.src = `img/${band}_${color}.jpg`;
});

document.getElementById("size").addEventListener("change", function () {
  size = this.value;
});

document.getElementById("quantity").addEventListener("change", function () {
  quantity = this.value;
});

function buy() {
  const order = {
    bandOrder: band,
    colorOrder: color,
    sizeOrder: size,
    quantityOrder: quantity,
    priceOrder: quantity * price,
  };

  document.querySelector(
    ".bandname"
  ).textContent = `${order.bandOrder} t-shirt`;
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

function openClose(event) {
  overlay.classList.toggle("hidden");
  orderPlaced.classList.toggle("hidden");
  header.classList.toggle("blur");
  main.classList.toggle("blur");
  footer.classList.toggle("blur");
  reviewOrder.classList.toggle("blur");

  if (event.target === placeOrder) {
    logToConsole();
  }
}

function logToConsole() {
  console.log({
    bandOrder: band,
    colorOrder: color,
    sizeOrder: size,
    quantityOrder: quantity,
    priceOrder: quantity * price,
  });
}

document.querySelector(".color").addEventListener("click", cancel);
document.querySelector(".size").addEventListener("click", cancel);
document.querySelector(".tshirt-quantity").addEventListener("click", cancel);
document.querySelector(".cancel").addEventListener("click", cancel);

placeOrder.addEventListener("click", openClose);
overlay.addEventListener("click", openClose);

// "use strict";

// const header = document.querySelector("header");
// const main = document.querySelector("main");
// const footer = document.querySelector("footer");
// const shirtPhoto = document.querySelector(".black-white");
// const buyBtn = document.querySelector(".buy");
// const reviewOrder = document.querySelector(".review-order");
// const placeOrder = document.querySelector(".place-order");
// const overlay = document.querySelector(".overlay");
// const orderPlaced = document.querySelector(".order-placed");
// let color = "black";
// let size = "small";
// let quantity = 1;
// let band;
// let price;

// if (document.title.toLowerCase() === "black flag t-shirt") {
//   price = 30;
//   band = "blackflag";
// } else {
//   price = 35;
//   band = "metallica";
// };

// document.getElementById("color").addEventListener("change", function () {
//   color = this.value;
//   shirtPhoto.src = `img/${band}_${color}.jpg`;
// });

// document.getElementById("size").addEventListener("change", function () {
//   size = this.value;
// });

// document.getElementById("quantity").addEventListener("change", function () {
//   quantity = this.value;
// });

// function buy() {
//   const order = {
//     bandOrder: band,
//     colorOrder: color,
//     sizeOrder: size,
//     quantityOrder: quantity,
//     priceOrder: quantity * price,
//   };

//   document.querySelector(".bandname").textContent = `${order.bandOrder} t-shirt`;
//   document.querySelector(".review-color").textContent = order.colorOrder;
//   document.querySelector(".review-size").textContent = order.sizeOrder;
//   document.querySelector(".review-quantity").textContent = order.quantityOrder;
//   document.querySelector(
//     ".review-price"
//   ).textContent = `US$ ${order.priceOrder}`;

//   reviewOrder.style.transform = "translateX(0%)";
// }

// buyBtn.addEventListener("click", buy);

// function cancel() {
//   reviewOrder.style.transform = "translateX(100%)";
// }

// function openClose() {
//   overlay.classList.toggle("hidden");
//   orderPlaced.classList.toggle("hidden");
//   header.classList.toggle("blur");
//   main.classList.toggle("blur");
//   footer.classList.toggle("blur");
//   reviewOrder.classList.toggle("blur");

// }

// function logToConsole() {
//   console.log({
//     bandOrder: band,
//     colorOrder: color,
//     sizeOrder: size,
//     quantityOrder: quantity,
//     priceOrder: quantity * price,
//   });
// }

// document.querySelector(".color").addEventListener("click", cancel);
// document.querySelector(".size").addEventListener("click", cancel);
// document.querySelector(".tshirt-quantity").addEventListener("click", cancel);
// document.querySelector(".cancel").addEventListener("click", cancel);

// placeOrder.addEventListener("click", openClose);
// overlay.addEventListener("click", openClose);