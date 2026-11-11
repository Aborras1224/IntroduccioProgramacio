const prompt = require('prompt-sync')();
let numero = Number(prompt("Introduce un número: "));
if (numero === 7) {
    console.log("Has adivinado el número");
}
else {
    console.log("No has adivinado el número");
}