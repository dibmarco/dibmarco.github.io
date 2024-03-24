"use strict";

let celsius2Fahrenheit = function (celsius) {
  let fahrenheit = celsius * (9 / 5) + 32;
  return fahrenheit;
};

let celsius2Kelvin = function (celsius) {
  let kelvin = celsius + 273.15;
  return kelvin;
};

let celsius = [15, 35, 20];
let fahrenheit = [];
let kelvin = [];

for (let i = 0; i < celsius.length; i++) {
  fahrenheit.push(celsius2Fahrenheit(celsius[i]));
  kelvin.push(celsius2Kelvin(celsius[i]));
}


console.log(celsius);
console.log(fahrenheit);
console.log(kelvin);

// console.log(celsius2Fahrenheit(15));
// console.log(celsius2Kelvin(15));


// let celsius = prompt("Enter a temperature in Celsius.");
/* let fahrenheit;
let kelvin; */

// console.log(
//   `This temperature is equal to ${celsius2Fahrenheit(
//     Number(celsius)
//   )} Fahrenheit, and ${celsius2Kelvin(Number(celsius))} Kelvin.`
// );
