const datos = [
    {
        id: 1, 
        tittle: "Iron Man",
        year: 2008
    },
    {
        id: 2, 
        tittle: "Spider: HomeComing",
        year: 2017
    },
    {
        id: 3, 
        tittle: "Avengers: Endgame",
        year: 2019
    }
]

const getDatos = () => {
    return new Promise((resolve, reject) => {
        if (datos.length === 0) {
            reject(new Error("Error, no existen datos"))
        }
        setTimeout( () => {
            resolve(datos);
        },1500 )
    })
}

//getDatos()
   // .then((datos) => {
   // console.table(datos)
  //  })
  //  .catch((err) => {
 //   console.error(err.message)
//    })

async function obtenerDatos() {
    try {
        const datosObtenidos = await getDatos ();
        console.table(datosObtenidos);
    } catch (error) {
        console.error(rttot.message);
    }
}

obtenerDatos();