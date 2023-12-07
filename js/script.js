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

// filtre des projets
function tabsFilters (){
    const tabs = document.querySelectorAll(".portfolio-filters a"); /* cible le portfolio */
    const projets = document.querySelectorAll(".portfolio .card"); /* cible la carte */

    /* remet la classe active à zéro */
    const resetActiveLinks = () => {
        tabs.forEach(elem => {
            elem.classList.remove("active");
        })
    }

    // ligne 40 à 58 une solution de chatGPT qui fonctionne enfin après 1h de bugs
    /* liste toutes les cards */
    const showProjets = (elem) => {
        console.log("Filter:", elem);
    
        projets.forEach(projet => {
            let filter = projet.getAttribute("data-category");
            let projetParentNode = projet.parentNode;
    
            console.log("Project Filter:", filter);
    
            if (elem === "all" || filter === elem) {
                console.log("Show Project:", filter);
                projetParentNode.style.display = "block";
            } else {
                console.log("Hide Project:", filter);
                projetParentNode.style.display = "none";
            }
        });
    };

    tabs.forEach(elem =>{
        elem.addEventListener("click", (event) => {
            event.preventDefault(); /* ne suit pas l'action  il empêche sont fonctionnement natif de remonter en haut dans la page*/
            let filter = elem.getAttribute("data-filter");
            //console.log(filter);
            showProjets(filter)
            resetActiveLinks(); /* mise en fonction de la remise à zéro de la classe active */
            elem.classList.add("active");
        });
    })
}
tabsFilters ()
