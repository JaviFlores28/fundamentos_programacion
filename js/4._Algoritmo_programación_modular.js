/* 
Algoritmo 1
Aplicando las técnicas de la programación modular, realizar 
una  nueva  versión  del  algoritmo  desarrollado  en  la  práctica  8  
para  ordenación  de  un  array.  El  cálculo  del  número  de  vocales  
de  una  cadena  y  la  muestra  de  su  contenido  se  realizarán  en  
procedimientos/funciones independientes
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

//metodo burbuja
function ordenarArray(array) {
  let arrayNuevo = reformarArray(array);
  // hasta n-1 debido a que el ultimo elemento ya esta ordenado
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
  console.log(arrayNuevo);
}

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
//ordenarArray(textos);

/* 
Algoritmo 2
Aplicando técnicas de programación modular, realizar una serie de 
procedimientos y funciones para realizar las siguientes operaciones:
• A partir de dos números nos devuelva el menor de los dos
• A partir de dos números nos devuelva el mayor de los dos
• A  partir  de  dos  números,  devuelva  la  suma  de  todos  los  números  
comprendidos entre ellos
• A partir de un número nos devuelva el factorial de dicho número.
Después, el programa solicitará dos números y, usando los procedimientos 
y funciones anteriores, mostrará la suma de los números comprendidos 
entre estos dos números y el factorial de cada uno.
*/

// Función que obtiene el numero menor de dos numeros
function numMenor(num1, num2) {
  if (num1 < num2) {
    return num1;
  } else {
    return num2;
  }
}

// Función que obtiene el numero mayor de dos numeros
function numMayor(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

// Función que obtiene la suma de los numeros comprendidos entre dos numeros
function sumaNumeros(num1, num2) {
  let suma = 0;
  num1 = numMenor(num1, num2);
  num2 = numMayor(num1, num2);
  do {
    suma = num1 + suma;
    num1++;
  } while (num1 <= num2);
  return suma;
}
// fórmula de la suma de una progresión aritmética con razon común 1
function sumaNumerosProgresionAritmetica(num1, num2) {
  let n = Math.round(Math.abs((num1 - num2) / 1)) + 1;
  let suma = (n / 2) * (num1 + num2);
  return suma;
}

// Función que obtiene el factorial de un numero de manera recursiva
function factorialRecursiva(num) {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    return num * factorialRecursiva(num - 1);
  }
}

// Función que obtiene el factorial de un numero de manera iterativa
function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  }
  let suma = 1;
  do {
    suma = suma * num;
    num--;
  } while (num != 1);
  return suma;
}

function main(num1, num2) {
  console.log("La suma de los numeros comprendidos entre", num1, "y", num2, "es: ",sumaNumerosProgresionAritmetica(num1, num2));
    console.log("El factorial de ", num1, "es: ", factorial(num1));
    console.log("El factorial de ", num2, "es: ", factorialRecursiva(num2));
}

main(1, 12);

