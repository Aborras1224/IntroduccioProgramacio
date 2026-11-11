const prompt = require('prompt-sync')();
let temperatura = Number(prompt("Introduce la temperatura en grados Celsius:"));

if (temperatura < 10) {
    console.log("Fa fred");
} else if (temperatura < 25) {
    console.log("Temperatura moderada");
} else {
    console.log("Fa calor");
}
