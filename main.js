let perso = {
    nom:"abdel",
    age: 20,
}


let myElelements = document.querySelectorAll("h1, h2")
console.log(myElelements);

console.log(Object.keys(perso));
let nouveaux = Object.keys(perso)

nouveaux.forEach(element => {
    console.log(element);
});

nouveaux.forEach(element => {
    console.log(perso[element]);
});

nouveaux.forEach((element,i) => {
    console.log(perso[element],i);
});
let compt = 0;
nouveaux.forEach((element,i) => {
    console.log(myElelements[i].innerText = perso[element]);
compt++
});

console.log(Object.values(perso));
let valeur = Object.values(perso)

valeur.forEach((element,i) => {
    myElelements[i].innerText = element
});
