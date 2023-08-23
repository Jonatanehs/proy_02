const Math = {};

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
Math.add = add
Math.substract = substract;
Math.multiply = multiply;
Math.divide = divide;


module.exports = Math;
