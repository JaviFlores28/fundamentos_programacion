/* 
Algoritmo 1
Indica  el  valor  de  las  variables  A  y  B  al  finalizar  el  siguiente  
algoritmo: */

let A = 7;
let B = 4;
let C = 9;
while (A != C) {
  if (C > 9) {
    B = B + 5;
  } else {
    A = A + 2;
  }
  console.log("A: ", A, "B: ", B);
}

/* 
Algoritmo 2
ndica los valores de las variables X, Y y Z al finalizar el siguiente 
proceso: */

let X=0;
let Y=7;
let Z=-4;

while (X>Z) {
    if (Y<15) {
        Z=Z+2;
    }
    else {
        Z=Z+1;
        X=X-1;
    }
    Y=Y+3;
}
console.log("X: ", X, "Y: ", Y, "Z: ", Z);

/*
Algoritmo 3
Indica el valor que se imprimirá al finalizar el proceso: */

let P =4;
let X1=0;
let Contador=0;

while (P!=8) {
    X1=X1+5;
    P=P+1;
    Contador=Contador+1;
}
console.log("El valor de X es: ", X1);

/*
Algoritmo 4
Indica el valor de la variable X al finalizar el proceso siguiente: */

let A1=15;
let B1=15;
let X2=100;
let Y1=100;
let Z1=0;
while (A1==B1) {
    A1=A1+3;
    while (X2==Y1) {
        X2=X2+Z1;
        break;
    }
    B1=B1+3;
    break;
}

/* El valor de X nunca cambia por el hecho de que z1 es igual a 0, 
asi mismo tanto para a1 y b1 se suman el mismo valor y siempre 
seran el mismo por ende se buclea infinitamente, se agrego brake 
para continuar los otros procesos*/
console.log("El valor de X es: ", X2);

