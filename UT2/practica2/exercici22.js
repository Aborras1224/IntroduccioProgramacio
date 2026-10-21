const prompt = require('prompt-sync')();
let number = prompt(`Introdueix un número:`);
let number2 = prompt(`Introdueix un altre número:`);
console.log(`El número que has introduït és: ${number}`);
console.log(`El número que has introduït és: ${number2}`);
console.log(`La suma dels dos números és: ${Number(number) + Number(number2)}`);
console.log(`La resta dels dos números és: ${Number(number) - Number(number2)}`);
console.log(`La multiplicació dels dos números és: ${Number(number) * Number(number2)}`);
console.log(`La divisió dels dos números és: ${Number(number) / Number(number2)}`);