let pop = document.getElementById("pop");
let popBox = document.getElementById("popBox");
let close = document.getElementById("close");

pop.addEventListener("click", (e) => {
  popBox.classList.toggle("hiddenbox");
});
close.addEventListener("click", (e) => {
  popBox.classList.toggle("hiddenbox");
});
