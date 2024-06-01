/* Algortimo 1
Realizar un algoritmo para un programa que se encargue de leer 
10 textos y, posteriormente, nos muestre los textos ordenados 
de  menor  a  mayor  número  de  caracteres.  En  caso  de  que  dos  
textos tengan el mismo número de caracteres, se pondrá primero 
el  que  tenga  mayor  número  de  vocales.  Para  este  algoritmo  
podemos utilizar la función ObtenerLetra
*/

// Función que obtiene la letra de una posición de un texto
function ObtenerLetra(texto, posicion) {
  let letra = texto.charAt(posicion);
  return letra;
}

// Función que obtiene el número de vocales de un texto
function contarVocales(texto) {
  const vocales = "aeiouáéíóúüAEIOUÁÉÍÓÚÜ";
  let contador = 0;
  for (let index = 0; index < texto.length; index++) {
    let letra = ObtenerLetra(texto, index);
    if (vocales.includes(letra)) {
      contador++;
    }
  }
  return contador;
}
// Función que reforma el array de textos con sus respectivos tamaños y número de vocales
function reformarArray(array) {
  let arrayNuevo = [];
  for (let index = 0; index < array.length; index++) {
    arrayNuevo[index] = [
      array[index],
      array[index].length,
      contarVocales(array[index]),
    ];
  }
  return arrayNuevo;
}

function ordenarArray(array) {
  let arrayNuevo = reformarArray(array);
  for (let index = 0; index < arrayNuevo.length - 1; index++) {
    //recorre desde la posicion de j hasta j+index+1 comparando el tamaño de los textos, suprimiendo los elementos en la ultima posicion ya ordenados
    let limitadorinterno = arrayNuevo.length - index - 1;
    let estadoCambios = false;
    for (let j = 0; j < limitadorinterno; j++) {
      if (arrayNuevo[j][1] > arrayNuevo[j + 1][1]) {
        //intercambio de posiciones
        [arrayNuevo[j], arrayNuevo[j + 1]] = [arrayNuevo[j + 1], arrayNuevo[j]];
        estadoCambios = true;
      }
      //si el tamaño de los textos es igual, se ordena por numero de vocales
      if (arrayNuevo[j][1] === arrayNuevo[j + 1][1]) {
        if (arrayNuevo[j][2] < arrayNuevo[j + 1][2]) {
          //intercambio de posiciones
          [arrayNuevo[j], arrayNuevo[j + 1]] = [
            arrayNuevo[j + 1],
            arrayNuevo[j],
          ];
          estadoCambios = true;
        }
      }
    }
    if (!estadoCambios) {
      break;
    }
  }
  return arrayNuevo;
}

function ordenarArrayJs(array) {
  array.sort((a, b) => {
    let diff = a.length - b.length;
    if (diff !== 0) {
      return diff;
    } else {
      return contarVocales(b) - contarVocales(a);
    }
  });

  return array;
}
// MAIN
// Array de textos
let textos = [
  "hola",
  "adios",
  "buenos dias",
  "buenas noches",
  "bdends tdrdes",
  "hasta luego",
  "hasta pronto",
  "hasta mañana",
  "hasta siemprd",
  "hasta nunca",
];

/* mediante el algoritmo */
console.log(ordenarArray(textos));

/* mediante funciones de js */
console.log(ordenarArrayJs(textos));
