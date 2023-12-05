
        //crear conjunto
        let letras = new Set()

        //Agregar elementos
        letras.add("b")
        letras.add("c")
        letras.add("y")
    
        console.log(letras)
        //Eliminar elementos
        console.log(letras.delete("a"))
        console.log(letras.delete("y"))
        console.log(letras)

        //Verificar si un elemento existe en el conjunto
        console.log(letras.has("y"))
        console.log(letras.has("c"))

        //Como se reoupera lo de foreach
        letras.forEach(l =>console.log(l))

        //recorrido con for of
        for ( const l of letras.values()) {
            console.log(l);
        }
