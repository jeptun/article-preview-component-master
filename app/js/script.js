"use strict";
/**
 * JS Test
 */
const testString = "Javascript test!";
console.log(testString);
const fruits = ["😀", "✨", "💀"];

fruits.map((fruit) => {
  console.log(fruit);
});

const btn = document.getElementById("btn-share");
const shareBox = document.getElementById("share-box");

const shareManagement = () => {
  btn.addEventListener("click", function () {
    shareBox.classList.toggle("show-box");
  });
};
shareManagement();
