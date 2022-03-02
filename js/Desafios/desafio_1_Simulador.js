// Simulador Interactivo
// Utilizando condicionales, ciclos y funciones

// Calcular IVA (21%) sobre el precio ingresado, 
// indicando si es mayor o menos el precio final

let price = parseInt(prompt('Ingresar precio:'));

const askprice = (price) => {
    if ((price >= 1001) && (price <= 5000)) {
        alert('El precio es mayor a $1000');
        return price * 1.21;
    }else if (price >= 5001) {
        alert('El precio es mayor a $5000, el IVA es mas caro');
        return price * 1.21;
    }else {
        return price * 1.21;
    }
}

let result = askprice(price);

console.log(`El precio total con IVA incluido es ${result}`);






