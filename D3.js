// /* ESERCIZIO 1
//  Scrivi un algoritmo per trovare il più grande tra due numeri interi.
// */

// /* SCRIVI QUI LA TUA RISPOSTA */

// let number = 1;
// let number2 = 3;

// if (number > number2){
//   console.log("Questo è il numero più grande", number);
// }

// else if (number < number2) { 
//   console.log("Questo è il numero più grande", number2)
// }

// else{
//   console.log("I numeri sono uguali")
// }
 
// /* ESERCIZIO 2
//   Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
// */

// /* SCRIVI QUI LA TUA RISPOSTA */
// if (number !== 5);
// console.log("Not equal");

// /* ESERCIZIO 3
//   Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
// */

// /* SCRIVI QUI LA TUA RISPOSTA */

// let number3 = 9
// if (number3 % 5 == 0)
// console.log("Divisibile per 5")  

// /* ESERCIZIO 4
//   Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
// */

// /* SCRIVI QUI LA TUA RISPOSTA */
// let num1 = 10
// let num2 = 30

// if (num1, num2 !=== 8) {
//   console.log(num1 "I numeri non sono uguali a 8")
  
// } else 
// /* ESERCIZIO 5
//   Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
//   C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
//   Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
// */

// /* SCRIVI QUI LA TUA RISPOSTA */

// let totalShoppingCart = 75
// const shipment = 10
// if (totalShoppingCart > 50)
// console.log ('Hai diritto alla spedizione gratuita :)')
// else if (totalShoppingCart < 50)
// console.log ('Shipment amounts to: €', totalShoppingCart + shipment)


/* ESERCIZIO 6
//   Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
//   Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
// */

// const blackFriday = (20 * 100);

// if (blackFriday / totalShoppingCart < 50)
// console.log ('Shipment amounts to: €', blackFriday / totalShoppingCart + shipment)
// else if (blackFriday / totalShoppingCart < 50)
// console.log ('Hai diritto alla spedizione gratuita :)')
// /* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

// /* SCRIVI QUI LA TUA RISPOSTA */

// // /* ESERCIZIO 8
// //   Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
// // */

// // /* SCRIVI QUI LA TUA RISPOSTA */

// let value = 567;

// console.log(typeof value);

// /* ESERCIZIO 9
//   Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
// */

// /* SCRIVI QUI LA TUA RISPOSTA */

// let numero = 3

// let risultato = (numero % 2);

// if (risultato > 0) {
//   console.log ("Il numero è dispari")
  
// } else {
//   console.log("Il numero è pari")
// }

// /* ESERCIZIO 10
// //   Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.

// // /* SCRIVI QUI LA TUA RISPOSTA */
// let val = 7
//   if (val < 10) {
//       console.log("Meno di 10");
//     } else if (val < 5) {
//       console.log("Meno di 5");
//     } else if (val >= 10) {
//       console.log("Uguale a 10 o maggiore");
//     }

// /* ESERCIZIO 11
//   Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
// */


// /* SCRIVI QUI LA TUA RISPOSTA */

// const me = {
//   nome: "John",
//   lastName: "Doe",
//   skills: ["javascript", "html", "css"]
// };

// me.city = "Toronto"
// console.log(me);


// /* ESERCIZIO 12
//   Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
// */

// /* SCRIVI QUI LA TUA RISPOSTA */
// const me = {
//     nome: "John",
//     lastName: "Doe",
//     skills: ["javascript", "html", "css"]
//   };
  
//   delete me.lastName
//   console.log(me);
  
// /* ESERCIZIO 13
//   Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
// */

// /* SCRIVI QUI LA TUA RISPOSTA */

// const me = {
//     nome: "John",
//     lastName: "Doe",
//     skills: ["javascript", "html", "css"]
//   };
  
// me.skills.pop();

//   console.log(me);
  

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let arrayVuoto = []

// arrayVuoto.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
// console.log(arrayVuoto);

// /* ESERCIZIO 15
//   Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
// */

// // /* SCRIVI QUI LA TUA RISPOSTA */

// let arrayVuoto = []

// arrayVuoto.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// arrayVuoto.splice(9, 9, 100);

// console.log(arrayVuoto);