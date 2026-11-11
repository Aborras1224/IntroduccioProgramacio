
const prompt = require('prompt-sync')();

let numero = Number(prompt("Introduce un número del 1 al 7: "));

switch (numero) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("Dia feiner");
        break;

    case 6:
    case 7:
        console.log("Cap de setmana");
        break;

    default:
        console.log("Dia no vàlid");
}
