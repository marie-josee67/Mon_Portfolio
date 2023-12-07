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
    const tabs = document.querySelectorAll(".porfolio-filters a"); /* cible le portfolio */
    const projets = document.querySelectorAll(".porfolio .card"); /* cible la carte */

    /* liste toutes les cards */
    const showProjets= (elem) =>{
        console.log(elem);
        projets.forEach(projet =>{
            let filter = projet.getAttribute("data-category");

            if(filter !== elem){
                projet.parentNode.classList.add("hide");
            }
            //console.log(projet);
        });
    }

    tabs.forEach(elem =>{
        elem.addEventListener("click", (event) => {
            event.preventDefault(); /* ne suit pas l'action  il empêche sont fonctionnement natif de remonter en haut dans la page*/
            let filter = elem.getAttribute("data-filter");
            //console.log(filter);
            showProjets(filter)
            elem.classList.add("active");
        });
    })
}


tabsFilters ()