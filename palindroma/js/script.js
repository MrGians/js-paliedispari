// TRACCIA: Palindroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma


// Chiedo all'utente di inserire una parola
const userWord = prompt("Inserisci una parola!", "ciao");
console.log("La parola scelta dall'utente è: " + userWord);

// Creo una funziona per ricostruire al contrario la parola inserita dall'utente
function reverseWord (word) {
  let result = "";

  for (i = word.length - 1; i >= 0; i--) {result += word[i];}

  return result;
}

// Recupero la parola al contrario generata dalla funzione
const reverseUserWord = reverseWord(userWord);
console.log("La parola scelta al contrario è: " + reverseUserWord);

// Controllo se la parola è palindroma
const isPalindrome = userWord === reverseUserWord ? console.log(`La parola ${userWord} è Palindroma!`) : console.log(`La parola ${userWord} non è Palindroma`);
console.log