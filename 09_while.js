/* Ciclo while, Permite repetir un código mientras una condición sea verdadera */

/*
let num1=parseInt(prompt("Ingresa un número")); 

while(isNaN(num1)){
    num1 =parseInt(prompt("Ingresa un número"));
}


let num1=parseInt(prompt("Ingresa un número"));
const num_secreto=3234;

while(num1 !== num_secreto){
    console.log("No adivinaste el número secreto, intenta de nuevo");
    num1=parseInt(prompt("Ingresa un número"));
}

console.log("Feliciaddes, encontraste el número secreto");
*/

const num1=parseInt(prompt("Ingresa un número"))

do {
    document.write(`<p>El número intoducido es ${num1}</p>`);    
    num1=parseInt(prompt("Ingresa un número"));
}
while(num1>5);
