/*  Realiza un ordinograma para un algoritmo que calcule el total 
de números naturales que hay que sumar, comenzando por el 1, 
hasta que la suma alcance el valor 1000. */

let contador = 0;
let suma = 0;
while (suma < 1000) {
    contador++;
    suma += contador;
}
console.log("Se necesitan :",contador);