"use strict";

//elementos
const shoe = document.querySelector(".shoe");
const description = document.querySelector(".description");
const next = document.querySelector(".next");
const info = document.querySelector(".info");
const previous = document.querySelector(".previous");

// variáveis
let photo = 1;

//funções
function nextPhoto() {
  photo++;
  if (photo > 3) {
    photo = 1;
  }
  console.log(photo);
  shoe.src = `../JavaScript/imgs/shoe-${photo}.png`;
  description.textContent = "";

  info.addEventListener("click", function () {
    description.textContent = `Shoe No.${photo}.`;
  });
}

function previousPhoto() {
  photo--;
  if (photo < 1) {
    photo = 3;
  }
  console.log(photo);
  shoe.src = `../JavaScript/imgs/shoe-${photo}.png`;
  description.textContent = "";

  info.addEventListener("click", function () {
    description.textContent = `Shoe No.${photo}.`;
  });
}

function inf() {
  description.textContent = `Shoe No.${photo}.`;
}

// botões
next.addEventListener("click", nextPhoto);
previous.addEventListener("click", previousPhoto);
info.addEventListener("click", inf);

document.addEventListener("keydown", function(e) {
  // console.log("A key was pressed.");
  // console.log(e.key);

  if (e.key === "ArrowRight") {
    nextPhoto();
  }

  if (e.key === "ArrowLeft") {
    previousPhoto();
  }

  if (e.key === "Enter") {
    inf();
  }
});

// let photo = 1;

// next.addEventListener("click", function () {
//   photo++;
//     if (photo > 3) {
//       photo = 1;
//     }
//     shoe.src = `../JavaScript/imgs/shoe-${photo}.png`;
// });

// previous.addEventListener("click", function () {
//   photo--;
//     if (photo < 1) {
//       photo = 3;
//     }
//     shoe.src = `../JavaScript/imgs/shoe-${photo}.png`;
// });

/* let photo = 1;

let nextPhoto = function () {
    photo++;
    return photo;
};

let currentPhoto = nextPhoto();

console.log(currentPhoto); */