const frutas = new Map([ 
    ["manzanas",2500 ],
    [ "Peras", 2000],
    [ "Banano", 1500]
])
console.log (frutas)
console.log ("Cantidad de llaves: " + frutas.size)

frutas.set("Pitahaya", 5000)
frutas.set("Mango", 3000)
console.log (frutas)
console.log ("Cantidad de llaves: " + frutas.size)
