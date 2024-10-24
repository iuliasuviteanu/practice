// 1. Write a program that determines whether a given number is positive or negative.
// 2. Write a program that checks if a number is even or odd.
// 3. Write a program to determine the greater of two numbers.


let number = 4;
let secondNumber = 7;

// number = 10;
// secondNumber = 5;

//1. Write a program that determines whether a given number is positive or negative.

if (number > 0 ) {
  console.log(`Number ${number} is positive`);
}else {
  console.log(`Number ${number} is negative`);
}

if (secondNumber > 0 ) {
  console.log(`Number ${secondNumber} is positive`);
}else {
  console.log(`Number ${secondNumber} is negative`);
}


// 2. Write a program that checks if a number is even or odd.

if ((number %2) == 0) {
  console.log(`Number ${number} is even`)
} else {
  console.log(`Number ${number} is odd`)
}

if ((secondNumber %2) == 0) {
  console.log(`Number ${secondNumber} is even`)
} else {
  console.log(`Number ${secondNumber} is odd`)
}

// 3. Write a program to determine the greater of two numbers.


if (number > secondNumber) {
  console.log(`${number} is the greatest number`);
} else {
  console.log(`${secondNumber} is the greatest number`);
}

// Tema 1: Afișarea unui mesaj
// * Descriere: Scrie un program care afișează un mesaj simplu, precum “test alert”, pe alert.
// * Verifica in consola daca ce ai introdus in alert (textul din alert daca are length > 6 caractere, daca are length mai mare de 6 carctere, afiseaza in consola mesajul ‘Ce ma mai distrez’  * foloseste if

let alertMessage = 'test alert';

alert(alertMessage);

if(alertMessage.length >6) {
  console.log('Ce ma mai distrez');
}