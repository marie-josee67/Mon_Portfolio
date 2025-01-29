const midiHeures = document.getElementById('H-midi') ; 
const soirHeures = document.getElementById('H-soir') ; 
const selectJour = document.getElementsByName('jour');

const selectHeure = document.getElementsByName('heure');
const selectCreneau = document.getElementsByName('creneau');
const tableauJourReserv = document.getElementsByClassName('indexJour');
let reservationJour = sessionStorage.getItem("")

function Affichage(){
    midiHeures.classList.add('hidden1');
    soirHeures.classList.remove('hidden1');
    // changer attribut creneau
    soirHeures.setAttribute('name','creneau') ;
    midiHeures.removeAttribute('name');
  
}
function Affichagesoir(){
    midiHeures.classList.remove('hidden1');
    soirHeures.classList.add('hidden1');
    // changer attribut creneau
    midiHeures.setAttribute('name','creneau') ;
    soirHeures.removeAttribute('name');
  
 
}
function toggleCreneaux(){
    heure = document.getElementById("heure").selectedIndex;     
    if(heure==0){
       
        Affichagesoir();

    }else if(heure==1){
        
        Affichage();
    }
}


// var i =0;
// const jour = ["lundi","mardi","mercredi","jeudi","vendredi","samedi","dimanche"]
// function ajouterOption(){
//     console.log(tableauJourReserv);

//     tableauJourReserv.forEach(() => {
//             jour.forEach(() => {
//                 if(jour !== 0 ){
//                     console.log(test);
//                         var jourElem = document.createElement('option');
//                         jourElem.setAttribute("value", jour);
//                         selectJour[0].appendChild(jourElem);
//                 }
//                 else{
//                         selectJour.append("<option selected='selected'>"+jour+"</option>")
//                 }                
//             });
//             i++;
//     })
// };
