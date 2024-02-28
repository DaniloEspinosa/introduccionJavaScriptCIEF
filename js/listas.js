// Las listas en javascript se llaman "arrays"

let color1 = "red"
let color2 = "blue"

let colores = ["yellow", "violet", color1, "orange", color2]

console.log(colores)

let color_favorito = "orange"

for (let i = 0; i < colores.length; i++) {
    console.log(colores[i])
    if (color_favorito == colores[i]) {
        console.log(`El color "${color_favorito}" esta en la lista`)
        break
    }
}