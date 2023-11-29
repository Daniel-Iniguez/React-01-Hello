// Desestructuración ( Destructuring assignment )
/**
 * Esto es una exprecion de JS que permite desempacar valores de arreglos o propiedades de objetos en distinas variables
 *  La desestructuración hace el código más limpio y legible al permitir extraer solo la información necesaria.
 */

let a = 10;
let b = 20;

// Pasar el valor de b>a u y el valor de a>b
[a, b] = [b, a]

console.log(a,b);

// -------------------------------------
const myArray = ["azul","rojo", "verde", "morado"];

// guardar en la varible colorA y colorB, el índice 0 y 2
// const colorA = myArray[0];
// const colorB = myArray[2];
const [ colorA,  ,colorB] = myArray;
console.log(`colorA: ${ colorA}, colorB: ${colorB}`); // azul, verde

// Desestructurando un objeto
const myObj = {
    name: "Daniel",
    lastName: "Iñiguez",
    age: 39
}

/* const name = myObj.name;
const lastname = myObj.lastName; */

const {name:myName, lastName} = myObj;
console.log(myName,lastName);

//-------------------------------------------
const prop = {
    title:"Pokemon",
    src: "https://ca0b.jpg" ,
    href:"https://pokemon_Wiki",         
    description:'Toma la "pokebola"',
    type:"animal"
 }

 // Usado la desestructuración, imprimir e consola
 // El "title" es "description".

const {title, description} = prop;
console.log(`el titulo es: ${title} y dice: ${description}`);


valoresSinDesestructuracion( prop );
valoresDesestructurados( prop );

function valoresSinDesestructuracion( myObj ){
    console.log(`La url de ${myObj.title} es ${myObj.src}`);
}

function valoresDesestructurados( {title, src} ){
    console.log(`La url de ${title} es ${src}`);
}


const myStyle = {
    virtual: {
        color:"blue",
        fontSize: 18,
        fontFamily: "Arial"
    },
    real: {
        color:"purple",
        fontSize: 20,
        fontFamily: "Georgia"
    },
};

// crear una funció que lea el color y fontSize
// del obejto "vitual"
 // "Para los objetos virtuales el color es blue y tamaño 18"
function colorFontSize ({virtual:{color,fontSize}}){
    console.log(`el color es: ${color} y el tamaño de la fuente es: ${fontSize}`);
}

colorFontSize(myStyle);