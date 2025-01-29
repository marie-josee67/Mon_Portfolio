var acc = document.getElementsByClassName("accordion");
var i;


for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
   /* Bascule entre l'ajout et la suppression de la classe "active",
    pour mettre en surbrillance le bouton qui contrôle le panneau */
    this.classList.toggle("active");

    /* Bascule entre le masquage et l'affichage du panneau actif */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}