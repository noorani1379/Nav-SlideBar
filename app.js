"use strict";

const container = document.querySelector(".container"),
      open = document.querySelector(".open");

open.addEventListener("click", () => {
  console.log("hi");
  container.classList.add("change");
});
document.querySelector(".close").addEventListener("click", () => {
  container.classList.remove("change");
});

const colors = ["#6495ed", "#7fffd4", "#ffa07a", "#f08080", "#afeeee"];

let i = 0;
Array.from(document.querySelectorAll(".link")).forEach((item) => {
  item.style.cssText = `background-color: ${colors[i++]}`;
});
