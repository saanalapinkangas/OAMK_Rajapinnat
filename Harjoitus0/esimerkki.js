var fs = require("fs");     //fs on luokka(filesystem), mahdollistaa tiedostojen lukemisen
var data = fs.readFileSync('input.txt');    //fs lukee tiedostoa muuttujana data

console.log(data.toString());   //muutetaan tiedosto tulostuskelpoiseksi
console.log("Program ended");   //lopputulostus