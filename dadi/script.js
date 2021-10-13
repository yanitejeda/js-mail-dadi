//definisco i valori dei partecipanti
const giocatore = Math.floor(Math.random() * 7);
const computer= Math.floor(Math.random() * 7);


console.log('giocatore numero',giocatore)
console.log('computer numero',computer)



// definisco il vincitore in base al numero più alto
// se giocatore > computer vince giocatore - altrimenti vince computer


if (giocatore > computer){
alert('hai vinto');
} else {
    alert ('mi dispiace hai perso');
}