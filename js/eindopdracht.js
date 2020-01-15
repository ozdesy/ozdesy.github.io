/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console': 0*/



/********** CONSOLE.LOG GEDAAN OM TE CONTROLEREN OF TEKST ZICHTBAAR WORDT IN DE CONSOLE **********/

console.log("contactformulier");
//document.querySelector('h1').textContent = 'Bedankt voor je bericht!';


/*********** DEZE FUNCTIE VOERT BERICHTJE UIT WANNEER ER OP 'SEND' WORDT GEKLIKT *BRON: LES INLEIDING PROGRAMMEREN WEEK 1* ************/

function verwerkFormulier(event) {
    event.preventDefault();
    console.log(document.querySelector('input').value);
    document.querySelector('h1').textContent = 'Bedankt voor je berichtje!';
}

document.querySelector('form').addEventListener('submit', verwerkFormulier);
