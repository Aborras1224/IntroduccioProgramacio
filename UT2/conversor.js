let nom = "========== CONVERSOR D'UNITATS =========="
console.log(nom);

const prompt = require('prompt-sync')();
const bytes = Number(prompt(`Insereix numero de bytes: `));

const kilobytes = bytes / 1024;
const megabytes = kilobytes / 1024;
const gigabytes = megabytes / 1024;

let nom1 = "Convertim Bytes a -> KB, MB, GB";
console.log(nom1);

console.log(`Bytes: ${bytes} `);
console.log(`Kilobytes: ${Math.round(kilobytes * 100) / 100} KB`);
console.log(`Megabytes: ${Math.round(megabytes*100) / 100} MB`);
console.log(`Gigabytes: ${Math.round(gigabytes * 100) / 100} GB`);

let nom2 = "Convertim GB a -> Bytes";
console.log(nom2);

let number2 = Number(prompt(`Insereix la mida en GB: `));
let gigabytes2 = (number2);
console.log(`Mida en bytes: ${gigabytes2 * 1024 * 1024 * 1024} Bytes`);

let nom3 = "Calculem el Temps de descàrrega";
console.log(nom3);

let number3 = Number(prompt(`Insereix la mida del fitxer a descarregar (GB): `));
let number4 = Number(prompt(`Quina és la velocitat de descàrrega en Mbps: `));

let midaFitxer = Number(number3);
let velocitatDescarga = Number(number4);

let tempsDescarga = (midaFitxer * 8000) / velocitatDescarga;
let tempsMinuts = tempsDescarga / 60;

console.log(`Temps de descàrrega: ${tempsDescarga} segons, ${Math.round(tempsMinuts * 100) / 100} minuts`);