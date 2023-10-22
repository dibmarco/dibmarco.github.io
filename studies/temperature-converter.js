"use strict";

// Primeira tentativa. Converte apenas de Celsius para as outras duas temperaturas e lança os resultados como texto.

// document.querySelector('.convert').addEventListener('click', function () {
//   let celsius = Number(document.querySelector('.celsius').value);
// //   console.log(celsius);
//   let fahrenheit = (celsius * (9/5) + 32);
// //   console.log(fahrenheit);
//   document.querySelector(".fahrenheit").textContent = Math.trunc(fahrenheit);
//   let kelvin = celsius + 273;
// //   console.log(kelvin);
//   document.querySelector(".kelvin").textContent = Math.trunc(kelvin);
// });

// Segunda tentativa. Converte qualquer temperatura para as outras duas e lança os resultados em caixas de input. Todas as fórmulas funcionam quando os valores são lançados como string, exceto quando um valor é lançado em Celsius (???). Nesse caso, quando aplicada a fórmula de conversão para Kelvin, os números são apenas concatenados e a operação não funciona (string + string = stringstring). Portanto, é necessário converter o valor de Celsius para número.

document.querySelector(".convert").addEventListener("click", function () {

  let celsius = document.querySelector(".celsius").value;
  // console.log(celsius);
  let fahrenheit = document.querySelector(".fahrenheit").value;
  // console.log(fahrenheit);
  let kelvin = document.querySelector(".kelvin").value;
  // console.log(kelvin);

  // console.log(typeof celsius, typeof fahrenheit, typeof kelvin)

  if (celsius) {
    fahrenheit = celsius * (9 / 5) + 32;
    document.querySelector(".fahrenheit").value = Math.trunc(fahrenheit);
    kelvin = Number(celsius) + 273;
    document.querySelector(".kelvin").value = Math.trunc(kelvin);

  } else if (fahrenheit) {
    celsius = ((fahrenheit - 32) * 5) / 9;
    document.querySelector(".celsius").value = Math.trunc(celsius);
    kelvin = ((fahrenheit - 32) * 5) / 9 + 273.15;
    document.querySelector(".kelvin").value = Math.trunc(kelvin);

  } else if (kelvin) {
    celsius = kelvin - 273.15;
    document.querySelector(".celsius").value = Math.trunc(celsius);
    fahrenheit = ((kelvin - 273.15) * 9) / 5 + 32;
    document.querySelector(".fahrenheit").value = Math.trunc(fahrenheit);
  }
});

document.querySelector(".clear").addEventListener("click", function () {
  document.querySelector(".celsius").value = "";
  document.querySelector(".fahrenheit").value = "";
  document.querySelector(".kelvin").value = "";
});