/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let randomNmber = Math.floor(Math.random() * 12);
  let randomSuit = Math.floor(Math.random() * 4);

  let numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
  let suits = ["&#9824", "&#9827", "&#9829", "&#9830"];

  document.querySelector(".suit").innerHTML = suits[randomSuit];
  document.querySelector(".number").innerHTML = numbers[randomNmber];
  document.querySelector(".upside-down-suit").innerHTML = suits[randomSuit];

  if (suits[randomSuit] == "&#9829" || suits[randomSuit] == "&#9830") {
    document.querySelector(".suit").style.color = "red";
    document.querySelector(".number").style.color = "red";
    document.querySelector(".upside-down-suit").style.color = "red";
  }
};
