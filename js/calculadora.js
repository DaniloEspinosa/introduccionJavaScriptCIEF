function calcular() {
    //Limpiar las advertencias
    let error1 = document.getElementById("error1")
    error1.innerText = ""
    let error2 = document.getElementById("error2")
    error2.innerText = ""
    let pantalla = document.getElementById("pantalla")

    // Obtener los números
    let num1 = document.getElementById("num1").value
    let num2 = document.getElementById("num2").value
    //console.log(num1 + num2)
    //console.log(isNaN(num1))
    num1 = num1.trim()
    num2 = num2.trim()

    let errores = false


    if (isNaN(num1) || num1 == "") {
        error1.innerText = "entrada incorrecta"
        errores = true
        // return
    }
    if (isNaN(num2) || num2 == "") {
        error2.innerText = "entrada incorrecta"
        errores = true
        // return
    }
    if (errores) {
        return
    }

    num1 = parseFloat(num1)
    num2 = parseFloat(num2)

    let opciones = document.getElementsByName("operador")
    console.log(opciones)

    let operacion
    for (i = 0; i < opciones.length; i++) {
        if (opciones[i].checked) {
            operacion = opciones[i].id
            break 
        }
    }

    console.log(operacion)

    
    if (operacion == "sumar") {
        pantalla.innerText = num1 + num2
    }
    if (operacion == "restar") {
        pantalla.innerText = num1 - num2
    }
    if (operacion == "dividir") {
        if (num2 == 0) {
            pantalla.innerText = "no se puede dividir por cero"
            return
        }
        pantalla.innerText = num1 / num2
    }
    if (operacion == "multiplicar") {
        pantalla.innerText = num1 * num2
    }
}

function limpiar() {
    document.getElementById("pantalla").innerText = 0
}