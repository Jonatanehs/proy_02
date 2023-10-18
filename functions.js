// la constante math se utilizara para nombrar los exports
const Math = {};
// las funciones son un conjunto de instrucciones que necesitan una entrada y dan una salida  
// define la funcion sumar(add)
function add(a,b){
    return a + b;
}

function substract(a,b){
    return a - b;
}

function multiply(a,b){
    return a * b;
}

function divide(a,b){
    if (b == 0 && a == 0)  {
        return "No Aplica";
    } else if(b==0){
    return "n/a";
    }  else {
        return a / b;
    }


}

// bajo el math se van a exportar las funciones bajo el nombre de la constante
Math.add = add
Math.substract = substract;
Math.multiply = multiply;
Math.divide = divide;

// el exports, exportan todo lo que tiene la funcion math
module.exports = Math;
