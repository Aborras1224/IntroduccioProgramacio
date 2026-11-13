const prompt = require('prompt-sync')();
let talla = Number(prompt("Introduce la talla (1-4): "));
if (talla === 1) {
    console.log("Talla S");
}
else if (talla === "2") {
    console.log("Talla M");
}  
else if (talla === "3") { 
    console.log("Talla L");
}
else if (talla === "4") {
    console.log("Talla XL");
}
else {
    console.log("Talla no válida");
}