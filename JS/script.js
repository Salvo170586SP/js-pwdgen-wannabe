console.log('JS OK');

/* 
1-domando nome all'utente e salvo il nome in una variabile
    *mando in conosole variabile nome

2-domando cognome all'utente e salvo il cognome in una variabile
    *mando in conosole variabile cognome

3-domando colore preferito all'utente e salvo il colore preferito in una variabile
    *mando in console variabile colore preferito

4-aggiungo anno 21 alla variabile anno

5- raccolgo variabili e scrivo risultato in pagina all'interno del paragrafo
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////

//1-domando nome all'utente e salvo il nome in una variabile
const nomeUtente = prompt("Qual'è il tuo nome?");
    console.log(nomeUtente);

//2-domando cognome all'utente e salvo il nome in una variabile
const cognomeUtente = prompt("Qual'è il tuo cognome?");
    console.log(cognomeUtente);

//3-domando colore preferito all'utente e salvo il colore preferito in una variabile
const colorePreferitoUtente = prompt("Qual'è il tuo colore preferito?");
    console.log(colorePreferitoUtente);

//4-aggiungo anno 21 alla variabile anno 
const anno = "21";

//5- raccolgo variabili e scrivo risultato in pagina all'interno del paragrafo
document.getElementById('passwordGenerate').innerText = nomeUtente + cognomeUtente + colorePreferitoUtente + anno;
    console.log(nomeUtente + cognomeUtente + colorePreferitoUtente + anno);

