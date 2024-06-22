//cambio1
//cambio guthub
//cambio texto
// archivo util para el algoritmo 1 de ordenacion de textos de arrays
/* reformar mediante metodo map
let textostamaño = textos.map((texto) => [
  texto,
  texto.length,
  contarVocales(texto),
]);
ordenar el array de textos por tamaño y numero de vocales metodo sort
textostamaño.sort((a, b) => {
    // Primero ordenar por longitud del texto
    if (a[1] < b[1]) {
      return -1;
    }
    if (a[1] > b[1]) {
      return 1;
    }
  
    // Si la longitud del texto es la misma, ordenar por número de vocales
    if (a[2] < b[2]) {
      return -1;
    }
    if (a[2] > b[2]) {
      return 1;
    }
  
    // Si la longitud del texto y el número de vocales son los mismos, no cambiar el orden
    return 0;
  }); 

// ejemplo de solucion mediantes erramientas de ordenacion de js
 function contarVocales(texto) {
  let contador = 0;
  for (let i = 0; i < texto.length; i++) {
    if ('aeiouAEIOU'.includes(texto[i])) {
      contador++;
    }
  }
  return contador;
}

let arrayTextos = ["texto1", "texto2", "texto3", "texto4", "texto5", "texto6", "texto7", "texto8", "texto9", "texto10"];

arrayTextos.sort((a, b) => {
  let diff = a.length - b.length;
  if (diff !== 0) {
    return diff;
  } else {
    return contarVocales(b) - contarVocales(a);
  }
});

console.log(arrayTextos);
  
  */
function bubbleSort(arr) {
  let len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
//ejemplo metodo burbuja
function bubbleSort(array) {
  let n = array.length;
  // Repetir el proceso para cada elemento en la lista
  for (let i = 0; i < n; i++) {
    // La bandera de intercambio se establece en false al principio de cada pasada
    let intercambiado = false;
    // Los elementos ya ordenados en las pasadas anteriores no se incluyen en la comparación
    let limiteInterno = n - i - 1;
    for (let j = 0; j < limiteInterno; j++) {
      let actual = array[j];
      let siguiente = array[j + 1];
      // Comparar el elemento actual con el siguiente
      if (actual > siguiente) {
        // Si están en el orden incorrecto, intercambiarlos
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        // Establecer la bandera de intercambio en true
        intercambiado = true;
      }
    }
    // Si no hubo intercambios en esta pasada, la lista ya está ordenada
    if (!intercambiado) {
      break;
    }
  }
  return array;
}

// Ejemplo de uso
let miLista = [25, 34, 64, 12, 22, 91, 90];
console.log("Lista original:", miLista);
let miListaOrdenada = bubbleSort(miLista);
console.log("Lista ordenada:", miListaOrdenada);
