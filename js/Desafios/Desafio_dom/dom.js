let nombre = prompt("Ingrese su nombre")
let sub = prompt("Que actividad deseas realizar?")

const array = [
    `Hola ${nombre.toUpperCase() }`,
    `Hello ${nombre.toUpperCase() }`, 
    `Salut ${nombre.toUpperCase() }`, 
    `Hallo ${nombre.toUpperCase() }` 
]

const receta = []

//Modificacion en h1
const titulo = document.getElementById(`titulo`)
titulo.innerText = array[Math.round(Math.random() * 5)]
//Modificacion en h2
const subTitulo = document.getElementById(`sub_titulo`)
subTitulo.innerText = `La actividad que elegiste hacer es ${sub}`

//Modificacion en boton e input - Event Listener
const boton = document.getElementById(`boton`)

boton.addEventListener(`click`, () => {

    const input = document.getElementById(`entrada`)
    const nombreProducto = input.value

    const root = document.getElementById(`root`)
    const nuevoProducto = document.createElement(`li`)
    nuevoProducto.innerText = nombreProducto
    root.appendChild(nuevoProducto)
    receta.push(nombreProducto)
    console.log(receta)
    receta.forEach(elemento => console.log(elemento))
})