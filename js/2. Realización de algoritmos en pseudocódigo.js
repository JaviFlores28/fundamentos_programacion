/* Algoritmo 1 
Realiza el algoritmo correspondiente a un programa que lea un 
número y muestre un texto indicando si el número es o no primo
*/
const readline = require("readline");

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

r1.question("Introduce un número ", (n) => {
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
  r1.close();
});

/* Algoritmo 2 
Diseñar un algoritmo que lea dos números y realice la suma de todos los 
números pares comprendidos entre ambos números.
*/
r1.question("Introduce el primer número ", (n) => {
  r1.question("Introduce el segundo número ", (n1) => {
    n = parseInt(n);
    n1 = parseInt(n1);
    let suma = 0;
    if (n > n1) {
      [n, n1] = [n1, n];
    }

    while (n <= n1) {
      if (n % 2 == 0) {
        suma += n;
      }
      n++;
    }
    /* segundo caso de uso
    valido si mi primer numero no es par para agregarle 1 y empezar a recorrer de 2 en 2 desde el primer numero par
    if (num1 % 2 !== 0) {
      num1++;
    }
    recorro de 2 en 2 hasta el segundo numero ya que el primero es par
    let suma = 0;
    for (let i = num1; i <= num2; i += 2) {
      suma += i;
    }*/

    console.log("la suma es: ", suma);
    r1.close();
  });
});
