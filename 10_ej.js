var num1=parseInt(prompt("Ingresa un número")); 
var sumatoria=0;
var contador=0;

while(num1>0){
    contador ++;
    sumatoria=sumatoria+num1;
    num1 =parseInt(prompt("Ingresa un número"));

}

document.write(`<p>${sumatoria}</p>`);
document.write(`<p>${sumatoria/contador}</p>`);