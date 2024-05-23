/* 
Algoritmo 1
Si se leen los siguientes números: 2, 4, 5, 1, 9, 17, 25, 27, 16, 30 y 11. 
¿Cuál sería el valor de la variable total al finalizar el programa? ¿y 
de la variable cont?
*/
let total = 0;
let cont = 0;
let numeros = [2, 4, 5, 1, 9, 17, 25, 27, 16, 30, 11];
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        total = total+1;
    }
    if(cont === 10){
        console.log("El valor de la variable total es:",total);
        console.log("El valor de la variable cont es:",cont);
        break;
    }else{
        cont=cont+1;
    }
}
/* cuenta todos los numeros que sean divisibles para 2 del total del array */

/* 
Algoritmo 2
dado  el  siguiente  ordinograma, ¿Qué es lo que hace el algoritmo anterior?. 
¿Qué se mostraría si la secuencia de números introducidos fuera 2, 5, 9, 3, -1, 4? */
let suma = 0;
let numeros2 = [2, 5, 9, 3, -1, 4];
for (let i = 0; i < numeros2.length; i++) {
    if (numeros2[i] > 0) {
        suma = suma + numeros2[i];
    }else{
        console.log("El valor de la variable suma es:",suma);
    }
}
/* suma todos los numeros ingresados hasta que exista un 
numero negativo en este caso lleva a -1 con un resultado de 19 */