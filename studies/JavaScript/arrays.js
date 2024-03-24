"use strict";

//elementos
const set = document.querySelector(".set");
const showArray1 = document.querySelector(".show1");
const showArray2 = document.querySelector(".show2");
const showArray3 = document.querySelector(".show3");

//variáveis
let input1, input2, input3;
const arr = [];

//função
const setArray = function () {
  input1 = document.getElementById("input1").value;
  input2 = document.getElementById("input2").value;
  input3 = document.getElementById("input3").value;
  arr.push(input1, input2, input3);
  showArray1.textContent = arr[0];
  showArray2.textContent = arr[1];
  showArray3.textContent = arr[2];
  console.log(arr);
};

//botão
set.addEventListener("click", setArray);
