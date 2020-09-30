// Hvordan få teksten i tekst.txt inn her?
// => node js file read.. Google tell me what to do :)
const fs = require("fs")

let tekster = fs.readFileSync('tekst.txt', "utf8");

console.log(tekster);