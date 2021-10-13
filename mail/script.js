//chiedere all'utente la sua email
const promptEmail = prompt('inserisci la tua email');

//dichiaro email nella lista che possono accedere
const emailInscritti = ['luca@gmail.com','sara@gmail.com','marco@gmail.com'];

console.log (emailInscritti.length);

//creare variabile  utente verificato
let utenteVerificato = false


//controllo se l'email inserita può accedere
for (let i = 0; i < emailInscritti.length ; i++){
    const emailApprovate = emailInscritti[i];


    if ( emailApprovate === promptEmail){
        utenteVerificato = true        
    }
}


//risultato della ricerca
if (!utenteVerificato){
    alert ('utente non trovato')
} else {
    alert ('utente trovato')
}

