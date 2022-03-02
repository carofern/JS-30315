//Desafio 2 - Array

let numeros = [];

const secuenciaColor = () => {
    for (let contador = 1; contador < 101; contador++) {
        if (contador % 3 === 0 && contador % 5 === 0) {
            numeros.push("Rojo");
            } else if (contador % 3 === 0) {
                numeros.push("Amarillo");
            } else if (contador % 5 ===0) {
                numeros.push("Verde")
            } else {
                numeros.push(contador);
            }       
    }
    console.log(numeros);
}

secuenciaColor();