//el require, importa todas las funciones que necesita
const functions = require('./functions.js')

console.log(functions);

// cuando se solicite imprimir un mensaje sin utilizar el console.log
process.stdout.write("numero de ejercio 1\n\n");

console.log(functions.add(5,3));
console.log(functions.substract(2,8));
console.log(functions.multiply(2,8));
console.log(functions.divide(2,0.9));