const barre = document.querySelector("#top .nav");
const burger = document.querySelector("#top .burger");
const icone1 = document.querySelector(".burger span:nth-child(1)");
const icone2 = document.querySelector(".burger span:nth-child(2)");
const icone3 = document.querySelector(".burger span:nth-child(3)");

burger.addEventListener("click", () => {
  barre.classList.toggle("burgerActiveNav");
  icone1.classList.toggle("burgerAnimIcon1");
  icone2.classList.toggle("burgerAnimIcon2");
  icone3.classList.toggle("burgerAnimIcon3");
});
