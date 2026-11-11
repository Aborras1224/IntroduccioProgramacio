
const prompt = require('prompt-sync')();

let edad = Number(prompt("Introduce tu edad: "));
let entrada = prompt("¿Tienes entrada? (si/no): ");

if (edad >= 18 && entrada === "si") {
    console.log("Accés permès");
}
else {
    console.log("Accés denegat");
}
