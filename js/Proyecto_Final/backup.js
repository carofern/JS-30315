//Calcular ritmo: divido tiempo total / total de km corridos

let tiempoTotal = prompt("Ingrese tiempo total:")
let distanciaKms = prompt("Ingrese distancia en Kms:")

const array = [tiempoTotal, distanciaKms];
const resultado = [];
const dividor = array[1];

array.forEach(function(elemento, indice) {
    resultado[indice] = elemento / dividor;
});

console.log(`Corri a ${resultado[0]} min por km`);

//Evento

const button = document.querySelector("#runButton")

button.addEventListener('click', () => alert("ESTO ES UN EVENTO: Falta completar los campos"));

