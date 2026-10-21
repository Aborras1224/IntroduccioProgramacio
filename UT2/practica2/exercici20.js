const prompt = require('prompt-sync')();
let text = prompt("Escriu un text:");
console.log(`El text que has escrit és: ${text}`);
console.log(typeof text);
console.log(`${Boolean(text)}`); // si el texto esta vaxio muestra false, esta vacio, si tiene texto muestra verdadero, entonces boolean dice si tiene texto o no.