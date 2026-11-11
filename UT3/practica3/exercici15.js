const prompt = require('prompt-sync')();

let numero1 = Number(prompt("Introduce el primer número: "));
let numero2 = Number(prompt("Introduce el segundo número: "));
let operacion = prompt("Introduce la operación (+, -, *, /): ");

if (operacion === "+") {
    console.log(numero1 + numero2);
}
else if (operacion === "-") {
    console.log(numero1 - numero2);
}
else if (operacion === "*") {
    console.log(numero1 * numero2);
}
else if (operacion === "/") {
    if (numero2 !== 0) {
        console.log(numero1 / numero2);
    }
    else {
        console.log("No es pot dividir entre zero");
    }
}
else {
    console.log("Operació no vàlida");
}