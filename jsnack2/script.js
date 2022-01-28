/* Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente. */

const n = parseInt(prompt('Inserisci fino a quale numero vuoi visualizzarne i cubi'));


for (let i = 1; i <= n; i++) {

    var cubo = Math.pow(i, 3);

    console.log(cubo);
}

let htmlCubo = document.querySelector('.risultato-cubo');
htmlCubo.innerHTML = "Il risultato dell'ultimo cubo desiderato è " + cubo;