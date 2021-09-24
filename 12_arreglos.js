const arreglo=[];
const arreglo2 =new Array();

let lenguajes=["Javascript","Java", "PHP", "Python", "C#", "C++", "Scala", "Rust", "Ruby", "Cobol"
];

/* forEach recorre los elementos de un array*/
document.write(`<ul>`)
lenguajes.forEach(function(lenguaje, index){
    document.write(`<ul>${index} - ${lenguaje}</ul>`);
});
document.write(`</ul>`);

/* Map, arreglo  con resultados */
let numeros =Array(2, 3, 4, 27, 19, 12);
let numeros2 =numeros.map(function(numero){
    return numero*2;
});

console.log(numeros);
console.log(numeros2);

/* Includes detrmina si es verdad*/
console.log(lenguajes.includes(`PHP`));

/* Filter, arreglo condicionado */
let filtrados=numeros.filter(function(numero){
    if(numero>10){
        return numero
    }
});

console.log(filtrados);
