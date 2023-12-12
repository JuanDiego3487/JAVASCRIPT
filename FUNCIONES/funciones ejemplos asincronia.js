/*

1.)

const myNumbers = [4, 1, -20, -7, 5, 9, -6];

const posNumbers = removeNeg(myNumbers, (x) => x => 0);
console.log(posNumbers);

function removeNeg(numbers, callback) {
    const myArray = [];
    for (const x of numbers)
        if (callback(x))
            myArray.push(x);
        return myArray;
}



2.)
function realizarTareaAsincronica(callback) {
    setTimeout(function () {
        console.log("Tarea asincronica completada");
        callback();

    }, 2000);
}

function miCallback () {
    console.log("El callback se ha ejecutado");

}

realizarTareaAsincronica(miCallback);
console.log("Mi tarea principal continua")



3.)
function operar (arr, operacion) {
    let resultado = 0;
    for (let num of arr) {
        resultado = operacion(resultado, num);
    }
    return resultado
}

function suma (a, b) {
    return a + b;
}

function producto (a, b) {
    return a * b;
}

const numeros = [1, 2, 3, 4, 5];
const sumaTotal = operar(numeros, suma);
const productoTotal = operar(numeros, producto);



4.)
function multiplicacion(factor) {
    return function (numero) {
        return numero * factor;

    }
}
const duplicar = multiplicacion(2);
const triplicar = multiplicacion(3);

console.log(duplicar(5));
console.log(triplicar(5));




5.)

 const doTask = (iterations, callback) => {
    const numbers = [];

    for(let i = 0; i < iterations; i++) {
        const number = 1 + Math.floor(Math.random() * 6);
        numbers.push(number);
        if (number === 6) {
            callback({
                error: true,
                iter: i,
                message: "Se ha sacado un 6"
            });
            return
        }
    }


return callback (null, {
    error: false,
    value: numbers
});
}

doTask(10, function(err, result) {
    if (err) {
        console.error(">>>Error: ",err.message);
        console.log(err);
        return;
    }
    console.log("Tiradas correctas: ", result.value);
});



6.)

function ruidosa(funcion) {
    return (...argumentos) => {
        console.log("llamando con", argumentos);
        let resultado = funcion (...argumentos);
        console.log ("llamada con", argumentos, ", retorno", resultado);
        return resultado;
    };
}
ruidosa(Math.min)(3, 2, 1);

EJERCICIO 1
*/
function ejercicio (num1, num2) {


}


