const frutas = new Map([ 
    ["manzanas",2500 ],
    [ "Peras", 2000],
    [ "Banano", 1500]
])
console.log (frutas)
console.log ("Cantidad de llaves: " + frutas.size)

//Set para poner un valor
frutas.set("Pitahaya", 5000)
frutas.set("Mango", 3000)
console.log (frutas)
console.log ("Cantidad de llaves: " + frutas.size)

console.log("La fruta de camilo es " + frutas.get ("Mango"))

//console.log (frutas.delete("Pitahaya"))
//console.log (frutas)
//console.log ("Cantidad de llaves: " + frutas.size)



//console.log("El mango existe en la canasta de frutas:" + frutas.has("Mango"))
//console.log (frutas)
//console.log ("Cantidad de llaves: " + frutas.size)

//devuelve true porque si existe

frutas.forEach((k, v) => {
    console.log(`El precio de  ${k} es: ${v}`)
})
for (const e of frutas.entries()) {
    console.log(`El precio de  ${e[0]} es: ${e[1]}`)

}
for (const [k, v] of frutas.entries() {
    
})