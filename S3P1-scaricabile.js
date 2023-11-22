/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/


/* SCRIVI QUI LA TUA RISPOSTA */

// function crazySum(num1, num2) {
//     if (num1 === num2) {
//         return(num1 + num2 )* 3
//     } else {
//         return(num1 + num2);
//     }
// }
// console.log(crazySum(3, 3));





/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// function boundary(nr) {
//     return (nr >= 20 && nr <= 100) || nr === 400;
// }
// console.log(boundary(390))
/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/


// function reverseString(str) {
    
//     let arrayDiCaratteri = str.split('');

    
//     let arrayInvertito = arrayDiCaratteri.reverse();
  
   
//     let stringaInvertita = arrayInvertito.join('');
  
   
//     return stringaInvertita;
//   }
  
  
//   console.log(reverseString("EPICODE")); 

/* SCRIVI QUI LA TUA RISPOSTA */









/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// function upperFirst(str) {
//     var parole = str.split(" "); //divido quello che ho nella stringa
//     // var paroleCambiate = []; // qui dovebbe finirci dentro tutto
  
//     for (var i = 0; i < parole.length;  i ++) { //con questo mi sposto di ogni parola
//       var primaMaiuscola = parole[i].charAt(0).toUpperCase();//qui metto la maiuscola a tutte le prime lettere(charAt è per indicare la prima)
//       var restante = parole[i].slice(1).toLowerCase(); //qui mi da in resto della parola
//       var altraParola = primaMaiuscola + restante; // qui le metto assieme
//     //   paroleCambiate.push(altraParola); // pusho e prego
//         parole[i] = altraParola;
//     }
  
//     // var modifica= parole.join(" "); //mi ridà la stringa moficata (speriamo)
//     return parole.join(" "); 
//   }
  
 
  
//   console.log(upperFirst("ora bestemmio"));  //come è sicuro che il sole sorge cazzooooo


/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// function giveMeRandom(n) {
//     const numeri = [];
//     for (let i = 0; i < n; i++) {
//       const randomNumber = Math.floor( Math.random() * 10); 
//       numeri.push(randomNumber);
//     }
//     return numeri;
//   }
  
  
//   const result = giveMeRandom(8);
//   console.log(result);
  

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// function area(l1, l2) {
//     return l1 * l2;
//   }
//   console.log(area(5,5));

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// function crazyDiff(numero) {
//     var differenzaAssoluta = Math.abs(numero - 19);
  
//     if (differenzaAssoluta > 19) {
//       return differenzaAssoluta * 3;
//     } else {
//       return differenzaAssoluta;
//     }
//   }
//   console.log(crazyDiff(15));  
// console.log(crazyDiff(25));
// /* ESERCIZIO 3
//  Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
//  La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
// */

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
