const prompt = require('prompt-sync')();
let number = prompt(`Insereix numero de bytes: `);

let bytes = parseInt(number);
let kilobytes = bytes / 1024;
let megabytes = kilobytes / 1024;
let gigabytes = megabytes / 1024;

console.log(`Bytes: ${bytes} `);
console.log(`Kilobytes: ${Math.round(kilobytes * 100) / 100} KB`);
console.log(`Megabytes: ${Math.round(megabytes*100) / 100} MB`);
console.log(`Gigabytes: ${Math.round(gigabytes * 100) / 100} GB`);

let nom

let number2 = prompt(`Insereix la mida en GB: `);
let gigabytes2 = parseFloat(number2);
console.log(`Mida en bytes: ${gigabytes2 * 1024 * 1024 * 1024} Bytes`);