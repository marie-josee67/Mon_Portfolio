// function du thème
function menuMobile(){
    const btn = document.querySelector(".burger");
    const header = document.querySelector(".header");
    const links = document.querySelector(".navbar a"); /* cibler les liens */

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
