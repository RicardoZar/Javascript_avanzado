var txt1, txt2, aux;

txt1= parseInt( prompt("Ingresa el primer número"));
txt2= parseInt( prompt("Ingresa el segundo número"));

if( txt1 > txt2){
    aux=txt1;
    txt1=txt2;
    txt2=aux;
}
for (var c=txt1; c <= txt2; c++){
    if( c%2!=0)
    console.log(c +",");
}