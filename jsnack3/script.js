/* Calcola la somma e la media dei primi 10 numeri. */

// Variabili
let somma = 0;
let media = 0;
// Costante desiderata: 10 dunque
const max = 10;

for (let i = 0; i <= max; i++) {

    somma += i;

    console.log(i);

}


// Parte media

media = somma / max;

let htmlRisultato = document.querySelector('.text-section');
htmlRisultato.innerHTML = "Il risultato della somma è " + somma + ", Il risultato della media è " + media;