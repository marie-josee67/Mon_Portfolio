// ********************************************************* nav barre
function menuMobile(){
    const btn = document.querySelector(".burger");
    const header = document.querySelector(".header");
    /*const links = document.querySelector(".navbar a"); /* cibler les liens */
    const links = document.querySelectorAll(".navbar a"); /* Utiliser querySelectorAll pour sélectionner tous les liens */

    /* bouton click du burger */
    btn.addEventListener("click", ()  =>{
        /*console.log("click");*/
        /* ajoute au header cette classe  du coup lorsque l'on click sur le burger le menu apparait*/
        header.classList.toggle("show-nav"); /* toggle ==> ouvre et ferme le burger seulement sur les traits */
    });

    links.forEach(link => {
        link.addEventListener("click", () => {
        header.classList.remove("show-nav"); 
        });
    });
}

/* jouer la function créer du click burger */
menuMobile();

// ******************************************************* partie portfolio 

function tabsFilters() {
    const tabs = document.querySelectorAll(".portfolio-filters a"); /* cible le portfolio */
    const projets = document.querySelectorAll(".portfolio .card"); /* cible la carte */

    /* liste toutes les cards */
    const showProjets = (filter) => {
        projets.forEach(projet => {
            const projetFilter = projet.getAttribute("data-filter");
            if (filter === "all" || filter === projetFilter) {
                projet.style.display = "block";
            } else {
                projet.style.display = "none";
            }
        });
    }

    tabs.forEach(elem => {
        elem.addEventListener("click", (event) => {
            event.preventDefault(); /* ne suit pas l'action, il empêche son fonctionnement natif de remonter en haut dans la page */
            let filter = elem.getAttribute("data-filter");
            console.log(filter);
            showProjets(filter);
        });
    });

    showProjets("all"); // Afficher tous les projets au chargement initial
}

tabsFilters();


tabsFilters ()