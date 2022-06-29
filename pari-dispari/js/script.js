// TRACCIA: Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


// Chiedo all'utente di scegliere "pari" o "dispari"
let userChoice = prompt(`Scegli "pari" o "dispari"`, "pari");
console.log("Scelta Utente: " + userChoice);


// Chiedo all'utente di scegliere un numero da 1 a 5
let userNumber = parseInt(prompt(`Scegli un numero da 1 a 5`, 5));

// Verifica sul valore inserito
while (isNaN(userNumber) || userNumber < 1 || userNumber > 5) {
  console.error("Il valore inserito non è valido!");
  userNumber = parseInt(prompt(`Scegli un numero da 1 a 5`));
}
console.log("Numero Utente: " + userNumber);



// Creo una funzione per generare un numero random
function getRandomNumber (min = 1, max = 100, maxIsIn = true) {
  // Controllo che "min" non sia maggiore o uguale a "max"
  if (min >= max) {
    console.error("I valori inseriti non sono validi.")
    return;
  }

  // Aggiungo opzione di inclusione numero "max" o meno
  if (maxIsIn) max++;
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;

  return randomNumber;
}

// Genero numero random per il Computer tramite funzione
const computerNumber = getRandomNumber(1, 5);
console.log("Numero Computer: " + computerNumber);


// Somma dei 2 numeri (numero utente + numero computer)
const sum = userNumber + computerNumber;
console.log("Somma dei 2 numeri è: " + sum);


// Creo una funzione per stabilire se un numero è pari o dispari
function isEven (number) {
  let result = true;

  if (number % 2) {result = false;}


  return result;
}

// Recuper il risultato della funzione
const sumResult = isEven(sum);

// Controllo SE result ha valore "pari" o "dispari"
if (sumResult) {
  console.log("Il risultato della somma è 'pari' !!")
}
else {
  console.log("Il risultato della somma è 'dispari' !! ")
}
// Controllo SE la scelta utente coincide con il risultato della somma 
if (userChoice === "pari" && sumResult || userChoice === "dispari" && !sumResult) {
  console.log("Hai Vinto!");
} else {
  console.log("Hai Perso!");
}
