const container = document.querySelector("#container");
const sections = document.querySelectorAll("section");
const liste = document.querySelectorAll("#top li");


const navigation = document.querySelector("#top ul");
const logo = document.querySelector("#top img");
const down = document.querySelector("#accueil .down");
const fleche = document.querySelector(".back-to-top");


// on recupere la valeur du scroll sur notre container
container.addEventListener("scroll", () => {
  // --------------------ANIMATION DES ELEMENTS DANS LA BARRE TOP---------------------------------
  if (container.scrollTop > 620) {
    // on ajoute a notre navigation la classe"anim-nav"
    navigation.classList.add("anim-nav");
    // on ajoute a notre logo la classe"anim-logo"
    logo.classList.add("anim-logo");
  } else {
    // on retire a notre navigation la classe"anim-nav"
    navigation.classList.remove("anim-nav");
    // on retire a notre logo la classe"anim-logo"
    logo.classList.remove("anim-logo");
  }

  // --------------------ANIMATION DES ELEMENTS DE LA NAV PAR RAPPORT A LA SECTION ------------------

  // la variable current correspondra à l'id de la section sur laquelle on se trouve
  let current = "";

  sections.forEach((section) => {
    // offsetTop retourne la distance (en pixels) du haut d'un élement par rapport au haut de son parent
    const sectionTop = section.offsetTop;
    // clientHeight retourne la hauteur "visible" (en pixels)
    const sectionHeight = section.clientHeight;
    // scrollTop = valeur du scroll sur l'axe vertical par rapport au haut du container (en pixels)
    if (container.scrollTop >= sectionTop - sectionHeight / 3) {
      // change la valeur de "current" par l'id de la section sur laquelle on se trouve
      current = section.getAttribute("id");
    }
  });

  liste.forEach((li) => {
    // on enleve la classe "active" a tous les elements "li" de notre liste
    li.classList.remove("active");
    // si la valeur de "current" correspond à l'id de notre "li"
    if (li.classList.contains(current)) {
      // on ajoute la classe "active" à cet "li"
      li.classList.add("active");
    }
  });
});

container.addEventListener("scroll", () => {
  if (container.scrollTop > 300) {
    down.classList.add("anim-down");
    fleche.classList.add("anim-fleche");
  } else {
    down.classList.remove("anim-down");
    fleche.classList.remove("anim-fleche");
  }
});
