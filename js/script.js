/* Este es un comentario
multilinea en javascript */

// Comentatio de una linea

// alert("Hola !!")

console.log("Hola !!")

let variable_1 = "Hola!!"  // Esta es la recomendada
console.log(variable_1)

var variable_2 = 25
console.log(variable_2)

variable_1 = "soy un string"  // Esto es un texto = STRING
console.log(typeof (variable_1))
variable_1 = 'soy otro string'
variable_1 = `otro string más` // Este tipo particular se llama template string o plantilla literal

let nombre = "Danilo"
let frase = `Te llamas ${nombre}, bienvenido`
console.log(frase)

variable_1 = 1678
console.log(typeof (variable_1))

variable_1 = true
console.log(typeof (variable_1))

let llueve = false
// llueve = true

// if significa "si", del significado -> si pasa algo... hago tal cosa

if (llueve) {        // si
    console.log("Tienes que llevar un paraguas, esta lloviendo")
} else {             // sino
    console.log("Con este clima podrias ir a pasear")
}


let dinero = 6

if (dinero >= 5) {
    console.log("Comeré pizza")
} else if (dinero >= 3) {
    console.log("Comeré un bocata")
} else if (dinero >= 1.5) {
    console.log("Tomaré un café con leche")
} else {
    console.log("Hoy toca ayuno")
}

if (dinero >= 5) {
    let eleccion = "pizza"
    if (eleccion == "pizza") {
        console.log("Vamos a la pizzeria")
    } else {
        console.log("Tendre un bocata con café con leche")
    }
}

// sintaxis básica de una función
function sumar_v1() {
    let suma = 1 + 2
    console.log(suma)

}
sumar_v1();

function sumar_v2() {
    let suma = 1 + 4
    return suma
}
console.log(sumar_v2())

function sumar_v3() {
    return 1 + 7
}
console.log(sumar_v3())

function sumar_v4(num1, num2) {
    return num1 + num2
}
console.log(sumar_v4(3,8))

function dividir(num1, num2) {
    return num1 / num2
}

console.log(dividir(10, 4))