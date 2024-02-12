"use strict";

const firstName = document.querySelector('.first-name');
const lastName = document.querySelector('.last-name');
const birthYear = document.querySelector('.birth-year');
const btClick = document.querySelector(".bt-click");

// Object
class BogusObject {
    constructor(firstName, lastName, birthYear) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.birthYear = birthYear;
      this._calcAge();
    }
  
    _calcAge() {
      this.age = 2024 - this.birthYear;
      return this.age;
    }
  }

// Architecture
class App {
    #objects = [];

  constructor() {
    // Attaches event handler
    btClick.addEventListener('click', this._createObject.bind(this));
  }

  _createObject() {
    const fN = firstName.value;
    const lN = lastName.value;
    const bY = birthYear.value;
    let object;

    object = new BogusObject(fN, lN, bY);

    // Adds new object to the #objects array;
    this.#objects.push(object);
    console.log(this.#objects);

    // Clears fields
    firstName.value = lastName.value = birthYear.value = "";
  }
}

const app = new App();