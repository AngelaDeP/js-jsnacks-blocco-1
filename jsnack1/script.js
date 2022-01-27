/* Il software deve chiedere per 10 volte all’utente di inserire un numero. 
Il programma stampa la somma di tutti i numeri inseriti. */

const array = [];

for (let i = 0; i < 10; i++) {

    let input = parseInt(prompt('Inserisci un numero'));
    array.push(input);
}

let somma = 0;

for (let j = 0; j < array.length; j++) {

    somma += array[j];
    
}

console.log(somma);

let htmlSomma = document.querySelector('.risultato-somma');
htmlSomma.innerHTML = "La somma dei numeri inseriti è " + somma;