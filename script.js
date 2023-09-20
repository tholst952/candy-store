"use strict";

const reeses = document.querySelector(".reeses");
const kitkat = document.querySelector(".kitkat");
const lindt = document.querySelector(".lindt");
const snickers = document.querySelector(".snickers");
const twix = document.querySelector(".twix");
const whatchamacallit = document.querySelector(".whatchamacallit");
const hersheys = document.querySelector(".hersheys");
const mms = document.querySelector(".mms");

const candyContainer = document.querySelector(".candy-container");
const itemClicked = document.querySelector(".item-clicked");
const candyClicked = document.querySelector(".candy-clicked");

reeses.addEventListener("click", function () {
  itemClicked.innerHTML = "Reeses!";
  candyClicked.innerHTML += " Reeses ";
});

kitkat.addEventListener("click", function () {
  itemClicked.innerHTML = `KitKat!`;
  candyClicked.innerHTML += " Kitkat ";
});

lindt.addEventListener("click", function () {
  itemClicked.innerHTML = `Lindt!`;
  candyClicked.innerHTML += " Lindt ";
});

snickers.addEventListener("click", function () {
  itemClicked.innerHTML = `Snickers!`;
  candyClicked.innerHTML += " Snickers ";
});

twix.addEventListener("click", function () {
  itemClicked.innerHTML = `Twix!`;
  candyClicked.innerHTML += " Twix ";
});

whatchamacallit.addEventListener("click", function () {
  itemClicked.innerHTML = `Whatchamacallit!`;
  candyClicked.innerHTML += " Whatchamacallit ";
});

hersheys.addEventListener("click", function () {
  itemClicked.innerHTML = `Hersheys Cookies N' Mint!`;
  candyClicked.innerHTML += " Hersheys Cookies N' Mint ";
});

mms.addEventListener("click", function () {
  itemClicked.innerHTML = `M&Ms!`;
  candyClicked.innerHTML += " M&Ms";
  console.log("well this way works");
});
