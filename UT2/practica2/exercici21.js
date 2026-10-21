const prompt = require('prompt-sync')();
let name = prompt("com et dius?:");
let age = prompt("Quants anys tens?:");
console.log(`Hola ${name}! Tens ${age} anys.`);
console.log (`L'any que ve en tendràs ${Number(age) + 1} anys`);

