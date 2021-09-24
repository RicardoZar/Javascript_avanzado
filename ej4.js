var txt1, txt2;

txt1= parseInt( prompt("Ingresa el primer número"));
txt2= parseInt( prompt("Ingresa el segundo número"));

if( txt1 > txt2){
    const resultado =`<h1> Hola, la suma es ${txt1+txt2}. La diferencia es ${txt1-txt2} </h1>`;
    document.write(resultado); 
}
else{
    const resultado =`<h1> Hola, el producto es ${txt1*txt2}. La división es ${txt1/txt2} </h1>`;
    document.write(resultado); 
}