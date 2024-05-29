/* Algoritmo 1 
Realiza el algoritmo correspondiente a un programa que lea un 
número y muestre un texto indicando si el número es o no primo
*/

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Introduce un número ", (n) => {
  n = parseInt(n);

  if (isNaN(n)) {
    console.error("Por favor, introduce un número entero válido");
  } else if (n < 2) {
    console.error("El número no es primo");
  }
  if (n == 2) {
    console.log("El número es primo");
  } else {
    let raiz = Math.round(Math.sqrt(n));
    for (let index = 2; index <= raiz; index++) {
      if (n % index == 0) {
        console.error("El número no es primo");
        break;
      }
      if (index == raiz) {
        console.log("El número es primo");
      }
    }
  }

  readline.close();
});
