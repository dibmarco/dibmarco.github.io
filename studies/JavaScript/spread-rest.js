"use strict";

const sum = function (a, b) {
    let c = a + b;
    return c
};

console.log(sum(1, 2));

const array1 = [1, 2];

console.log(sum(...array1));

// let c2f = function(c) {
//     let f = (c * (9/5) + 32);
//     return f;
// };

// let c = [12, 15, 26];

// console.log(c2f(...c));

// SPREAD

//arrays
const arr1 = ["Paul", "John", "Larry"];
const arr2 = ["George", ...arr1];
console.log(arr2);

const menuDoce = ["sorvete", "bolo", "gelatina"];
const menuSalgado = ["sopa", "macarronada", "lasanha"];
const menu = [...menuDoce, ...menuSalgado];
console.log(menu);

//objects
const obj1 = {
  item1: "cup",
  item2: "ashtray",
};

const obj2 = { ...obj1, item3: "fork" };

console.log(obj2);

const person1 = {
  firstName: "Joe",
  lastName: "Rogan",
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  podcasts: ["Joe Rogan Podcast", "Lex Fridman", "HubermanLab"],
};

const person2 = { ...person1, firstName: "Luis", lastName: "CK" };

console.log(person1);
console.log(person1.fullName());
console.log(person2);
console.log(person2.fullName());

// REST

//arrays
const [a, b, ...others] = [1, 2, 3, 4, 5, 6];
console.log(a, b, others);

const [doce1, doce2, ...resto] = [...menuDoce, ...menuSalgado];
console.log(doce1, doce2, resto);

const [featPodcast, ...otherPods] = person1.podcasts;
console.log(featPodcast, otherPods);

const add = function (...numbers) {
  console.log(numbers);
};

add(1, 2);
add(4, 7, 8, 9, 0);

let c2f = function (c) {
    let fahrenheit = [];
    for (let i = 0; i < c.length; i++) {
        let f = c[i] * (9 / 5) + 32;
        fahrenheit.push(f);
    }
    return fahrenheit;
};

let c2k = function (c) {
    let kelvin = [];
    for (let i = 0; i < c.length; i++) {
        let k = c[i] + 273.15;
        kelvin.push(k);
    }
    return kelvin;
}

let celsius = [11, 13, 14];


console.log(c2f(celsius));
console.log(c2k(celsius));

let orderPizza = function (mainIngredient, ...otherIngredients){
  console.log(mainIngredient);
  console.log(otherIngredients);
};

let ingredients = ["onion", "olives", "spinach"];

orderPizza(...ingredients);
orderPizza("onion", "olives", "spinach");