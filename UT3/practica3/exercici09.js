const prompt = require('prompt-sync')();
let x = prompt("Introduce tu edad: ");
let edad = Number(x);
if (edad < 18) {
    console.log("Eres menor de edad");
}
else {
    console.log("Eres mayor de edad");
}   
