/* 
Algoritmo 1
Diseña un algoritmo para la lectura de 20 números y que nos 
muestre la suma de los pares por un lado y la de los impares por 
otro.
 */
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let count = 0;
let sumaPares = 0;
let sumaImpares = 0;

console.log("ingrese el primer numero:");
rl.on("line", (input) => {
  count++;
  if (input % 2 == 0) {
    sumaPares += Number(input);
  } else {
    sumaImpares += Number(input);
  }
  if (count == 20) {
    console.log("la suma de los pares es:", sumaPares);
    console.log("la suma de los impares es:", sumaImpares);
    rl.close();
  } else {
    console.log("ingrese el siguiente numero:", count);
  }
});

/* 
Algoritmo 2
Diseña un algoritmo para un programa que lea 10 textos y nos 
muestre aquel que tenga el mayor número de caracteres. Si hay 
más de un texto con el mismo número de caracteres, mostrará 
el último de ellos. Puedes utilizar la función Longitud para este 
ejercicio.
*/
function longitud(texto) {
  return texto.length;
}
count = 0;
let arrayTextos = [];
let textoMayor = "";
console.log("ingrese el primer texto:");
rl.on("line", (text) => {
  count++;
  if (count == 10) {
    arrayTextos.push(text);
    for (let i = 0; i < arrayTextos.length; i++) {
      if (longitud(textoMayor) < longitud(arrayTextos[i])) {
        textoMayor = arrayTextos[i];
      }
    }
    console.log(
      "el texto mayor es:",
      textoMayor,
      ", y el numero de textos es:",
      arrayTextos.length
    );
    rl.close();
  } else {
    console.log("ingrese el siguiente texto:");
    arrayTextos.push(text);
  }
});
/* 
Algoritmo 3
Diseñar un algoritmo para la lectura de 20 números y que nos 
muestre la media de todos los números leídos y cuál ha sido el 
más pequeño
*/
console.log("Ingrese el primer número: ");
let suma = 0;
let menor = Infinity;
count = 0;

rl.on("line", (numero) => {
  let n = Number(numero);
  suma += n;
  count++;

  if (n < menor) {
    menor = n;
  }

  if (count == 20) {
    let media = suma / count;
    console.log("La media es:", media);
    console.log("El menor es:", menor);
    rl.close();
  } else {
    console.log("Ingrese el siguiente numero: ", count);
  }
});

/* 
Algoritmo 4
Realizar un algoritmo para un programa que lea 15 números y 
nos diga cuántos de ellos son primos. De cara a la lectura de 
los números, si el número introducido es negativo se le deberá 
volver a pedir de nuevo el número hasta que se introduzca uno 
positivo.
*/
