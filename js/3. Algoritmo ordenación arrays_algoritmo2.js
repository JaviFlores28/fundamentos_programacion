/* Algoritmo 2
Dado un array de dos dimensiones de 4x6, realizar un programa que lea 
24  números  y  los  coloque  en  el  array.  Posteriormente,  se  ordenará  el  
array de menor a mayor (la posición 1,1 tendrá el número más pequeño, 
mientras que 4,6 tendrá el mayor) y se mostrará ordenado
 */
const readline = require("readline");


let array = new Array(4);
for (let i = 0; i < 4; i++) {
  array[i] = new Array(6);
}

let count = 0;
let r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
console.log("ingrese un numero:");
r1.on("line", function (input) {
  if (count > 23) {
    console.log(array);

    // se crea un array unidimensional con los elementos del array bidimensional
    let arrayUnidimensional = [];
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 6; j++) {
        arrayUnidimensional.push(array[i][j]);
      }
    }
    // se ordena el array unidimensional metodo burbuja
    for (let i = 0; i < arrayUnidimensional.length - 1; i++) {
      let limitadorinterno = arrayUnidimensional.length - 1 - i;
      let estadoCambios = false;
      for (let j = 0; j < limitadorinterno; j++) {
        if (arrayUnidimensional[j] > arrayUnidimensional[j + 1]) {
          // se intercambian los elementos del array unidimensional
          let aux = arrayUnidimensional[j];
          arrayUnidimensional[j] = arrayUnidimensional[j + 1];
          arrayUnidimensional[j + 1] = aux;
          // se marca el estado de cambios para salir del bucle
          estadoCambios = true;
        }
      }
      if (!estadoCambios) {
        break;
      }
    }

    // se rellena el array bidimensional con los elementos ordenados
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 6; j++) {
        // array[i][j] = arrayUnidimensional en la posicion i * 6 + j para obtener la posicion del array unidimensional ejemplo i=0 j=2 0*6+2=2 se asignara el valor de la posicion 2 del array unidimensional a la posicion 0,2 del array bidimensional;
        array[i][j] = arrayUnidimensional[i * 6 + j];
      }
    }
    console.log("Array ordenado:");
    console.log(array);
    r1.close();
  } else {
    // math.floor redondea al entero menor de la posición i y count % 6 devuelve el resto de la división de count por 6
    // nota si son numeros conbertir la entrada a numero si no ordenara en forma de string
    array[Math.floor(count / 6)][count % 6] = Number(input);
    count++;
    console.log("ingrese el siguiente numero:");
  }
});
