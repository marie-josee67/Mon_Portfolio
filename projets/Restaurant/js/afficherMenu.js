const bouton = document.querySelectorAll(".bouton2");

bouton.forEach(function (button) {
  button.addEventListener("click", () => {
    button.classList.toggle("bouton2active");
  });
});