const prompt = require('prompt-sync')();
let number = prompt(`Primer número:`);
let number2 = prompt(`Segon número:`);
console.log(`suma = ${Number(number) + Number(number2)}`);
console.log(`resta = ${Number(number) - Number(number2)}`);
console.log(`multiplicació = ${Number(number) * Number(number2)}`);
console.log(`divisió = ${Number(number) / Number(number2)}`);