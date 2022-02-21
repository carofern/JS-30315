//Crear un algoritmo utilizando un ciclo
// 1.- Pedir un numero para ver su tabla de multiplicar
// 2.- Multiplicar el numero por la cantidad de veces (i)
// 3.- Imprimir el resultado con detalle

let askNumber = parseInt(prompt('Ingresa un numero para ver su tabla de multiplicar:'));

for (let i = 0; i <= 10; i++) {
    let result = askNumber * i;
    console.log(askNumber + " x " + i + " = " + result);
}
