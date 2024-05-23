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

