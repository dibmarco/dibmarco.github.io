"use strict";

const btClick = document.querySelector(".bt-click");
const pEl = document.querySelector(".text");

// Architecture
class App {
  #counter = 0;

  constructor() {
    // Event handler
    btClick.addEventListener("click", this._showText.bind(this));
  }

  _showText() {
    this.#counter++;
    pEl.textContent === ""
      ? (pEl.textContent = `You have already clicked ${this.#counter} ${
          this.#counter === 1 ? "time" : "times"
        }. Keep clicking!`)
      : (pEl.textContent = "");
  }
}

const app = new App();
