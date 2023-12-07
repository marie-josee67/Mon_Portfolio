/* test ==> console.log('toto');*/

// string ==> chaine de caractère
let myVar = "ma variable"; //  let ==> on peut changer sa valeur plus tard et la réasigner plus tard.
// si on veut la redéfinir
myVar = " variable changée";

const myVar2 = "ma second variable"; // const ==> bouge plus sa valeur.

var myVar3 = " ma troisième variable"; // n'est plus utiliser de nos jours.

console.log ("affiche le résultat");
console.log(myVar);

//boolean
let isTrue = true;
let isFalse = false;

//console.log(isTrue);

//chiffres et opérateurs

let chiffre1 = 4; //pas de guillet sinon c'est pris pour un string
let chiffre2 = 3;

console.log(chiffre1, chiffre2);
console.log(chiffre1 + chiffre2);

let chiffre3 = "8";

// permet de dire quel type chiffre1 et chiffre3 sont.
console.log(typeof chiffre1, typeof chiffre3);

// template string, littéraux de gabaris et concaténation

let test = "test" + myVar;

// bonne pratique veut qu'on utilise les littéraux de gabaris
let test2 = `test ${myVar}`; //apostrophe donc sur le chiffre 7 pas guillement simple du chiffre 4 du clavier

//console.log(test2);

// condition si sinon sinonsi
//chiffre1 un supérieur à chiffre2
if (chiffre1 <= 3){
    console.log("condition est valide");
} else if (chiffre1 <=4){
    console.log("je passe la");
} else{
    console.log ("condition pas valide");
}

// si trop de condition à faire voir pour un switch js 

//tableaux

let array = ["item1", "item2", "item3", "item4"];
console.log(array.length);
console.log(array[0]);

//objet

let obj ={
    title: 'mon titre',
    description:'ma description'
}
console.log(obj.title, obj.description);

// boucles, while, for foreach
// i inférieur à 5
for (let i = 0; i < 5; i++) {
    console.log(i);
}

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

array.forEach(item => {
    console.log(item);
});

// fonctions

/*function myFunction = (item, item2){
    console.log(item, item2);
}*/

// bonne pratique actuel
const myFunction = (item, item2) => {
    console.log(item, item2);
}

myFunction("toto",5);
myFunction("titi",6);

const calcul = (nb1, nb2) => {
    return nb1 + nb2;
}
let result = calcul (4, 5);
console.log (result);