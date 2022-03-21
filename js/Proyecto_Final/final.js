//Calcular ritmo: divido tiempo total / total de km corridos


//Nueva interaccion
let distancia = document.getElementById('dist').value;
let tiempoTotal = document.getElementById('ttHour').value;

let getData = function () {
    const distancia = document.getElementById('dist').value;
    const tiempoTotal = document.getElementById('ttHour').value;
    console.log(`${distancia} ${tiempoTotal}`);
}


const array = [tiempoTotal, distancia];
const resultado = [];
const dividor = array[1];

array.forEach(function(elemento, indice) {
    resultado[indice] = elemento / dividor;
});

console.log(`Corri a ${resultado[0]} min por km`);

//Evento

const button = document.querySelector("#runButton")
button.addEventListener('click', () => alert("ESTO ES UN EVENTO: Falta completar los campos"))