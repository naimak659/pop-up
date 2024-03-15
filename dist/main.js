let pop = document.getElementById("pop");
let popBox = document.getElementById("popBox");
let close = document.getElementById("close");
let theme = document.querySelector("#thememode");
let themeSpan = document.querySelector("#thememode span");
let main = document.querySelector("body");
console.log(themeSpan);

function hidden1() {
  popBox.classList.toggle("hiddenbox");
}

function themeMode() {
  main.classList.toggle("dark");
  if (main.classList.length == 1) {
    themeSpan.innerHTML = "LHT";
  } else {
    themeSpan.innerHTML = "DRK";
  }
}

pop.addEventListener("click", hidden1);
close.addEventListener("click", hidden1);

theme.addEventListener("click", themeMode);


