
const prompt = require('prompt-sync')();

let edad = Number(prompt("Introduce tu edad: "));
let estudiante = prompt("¿Tienes carnet de estudiante? (si/no): ");

if (edad < 18 || edad > 65 || estudiante === "si") {
    console.log("Tens descompte");
}
else {
    console.log("Preu normal");
}
