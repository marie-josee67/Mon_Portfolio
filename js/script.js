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

            // code plus propre
            //filter != elem ? projetParentNode.style.display = "none": projetParentNode.style.display = "block";  // ne marche pas pour l'onglet tous les projets. 
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

// ********************** le + 

function showProjectDetails(){
    const links = document.querySelectorAll(".card__link"); 
    const modals = document.querySelectorAll(".modal"); 
    const btns = document.querySelectorAll(".modal__close"); 
    

    // retirer les modales lors du click d'une autre card
    const hideModals = () => {
        modals.forEach(modal => {
            modal.classList.remove("show");
        });
    }

    links.forEach(elem =>{
        elem.addEventListener("click", (event) => {
            event.preventDefault(); /* ne suit pas l'action  il empêche sont fonctionnement natif de remonter en haut dans la page*/
            document.querySelector(`[id=${elem.dataset.id}]`).classList.add("show");
        });
    })

    // fermer la modale  avec le bouton
    btns.forEach(btn =>{
        btn.addEventListener("click", (event) => {
            hideModals();
        });
    })
}

showProjectDetails();

// *****************les effets scroller entre les sections si tous est sur une page.

/*const observerIntersectionAnimation = () =>{
    const sections = document.querySelectorAll("section");

    // appel toutes les sections  mais moi j'ai différente page donc voir si cela pause une problème plus tard
    sections.forEach((section, index) =>{
        //console.log(index);
        if (index === 0 ) return; // ainsi la première section ne sera pas prise pour l'effet de scroll
        section.style.opacity = "0"; // faire tous disparaitre les sections non vouluent pour scroller
        section.style.transition = "all 1.6s"; 
    });

    let sectionObserver = new IntersectionObserver(function (entries, observer){
        entries.forEach(entry =>{
            if(entry.isIntersecting){
                let elem = entry.target;
                elem.style.opacity = 1;
                console.log(elem);
            }
        });
    });

    sections.forEach(section =>{
        sectionObserver.observer(section)
    });
} 

// on appel la fonction
observerIntersectionAnimation ();*/

// ******************************************** barres des compétences
const observerIntersectionAnimation = () => {
    const skills = document.querySelectorAll(".skills .bar");

    skills.forEach((elem, index) => {
        elem.style.width = "0";
        elem.style.transition = "width 1.6s";

        // Ajoutez un élément span pour afficher le pourcentage dans les barres des compétences
        //const percentageSpan = document.createElement("span");
        //percentageSpan.className = "percentage";
        //elem.appendChild(percentageSpan);
    });

    let skillsObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let elem = entry.target;
                elem.style.width = elem.dataset.width + "%";

                // Pour mettre le pourcentage dans les barres des compétences
                //const percentageSpan = elem.querySelector(".percentage");
                //if (percentageSpan) {
                   // percentageSpan.textContent = elem.dataset.width + "%";
                //}
            }
        });
    });

    skills.forEach(skill => {
        skillsObserver.observe(skill);
    });
}

// Appeler la fonction pour déclencher l'observation
observerIntersectionAnimation();