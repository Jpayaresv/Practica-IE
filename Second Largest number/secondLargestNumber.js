
let arraylength = prompt ("Digite el tamaño del array");

let array = [];

for (let i = 0; i < arraylength; i++) {
    
    array[i] = prompt("Por favor digite el número en la posición "+ i + " del array")
    
}

document.write ("El array digitado es: "+ array);

let orderedArray = array.sort(function(a, b){return b - a});

document.write ("<br> El array ordenado es: "+ orderedArray);

document.write ("<br> El segundo número más grande del array es: "+ orderedArray[1]);

