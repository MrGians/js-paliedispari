// TRACCIA: Palindroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma


// Chiedo all'utente di inserire una parola
const userWord = prompt("Inserisci una parola!", "ciao");
console.log("La parola scelta dall'utente è: " + userWord);

// Creo una funziona per ricostruire al contrario la parola inserita dall'utente
function isPalindrome (word) {
  // Inizializzo la variabile result a Stringa
  let wordReverse = "";
  // Creo un ciclo FOR per ricostruire lettera per lettera la parola partendo dalla fine (reverse)
  for (i = word.length - 1; i >= 0; i--) {wordReverse += word[i];}
  console.log("La parola scelta al contrario è: " + wordReverse);

  // Controllo se la parola è Palindroma
  let palindromeResult = word === wordReverse ? `La parola ${word} è Palindroma!` : `La parola ${word} NON è Palindroma!`;

  // Restituisco il risultato finale
  return palindromeResult;
}

// Recupero il risultato dalla funzione
const palindromeCheck = isPalindrome(userWord);
console.log(palindromeCheck);
