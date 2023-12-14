const miPromesa = new Promise (
    (resolve, reject) => {
        setTimeout(() => {
            resolve("Operacion completada con exito");
        }, 2000);//En los 2000 significa 2 segundos, i mean is like say 0.0002 xd ay no estoy aburrido no entiendo nada por favor ayudenme
    });

    console.log("Iniicio de la promesa");

    miPromesa.then(resultado => {
        console.log(resultado);
    })
    .catch(error => {
        console.error ("Error:", error)
    });
    console.log("Tareas ")