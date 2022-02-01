// MOSTRAR "Mensaje"
console.log("Hola mundo");

// Como comentar
// alert("Hola mi nombre es Christian " + (5 + 6));

/*
Una linea
Dos lineas
*/

// Variables

console.log("%cVariables", "color:blue");

// Aqui defino varibles string(de texto) y number(numerica)
var cadena = "Este es el contenido de cadena";
var numero_entero = 20;
var numero_decimal = 3.5;
var resultado = (numero_entero * numero_decimal) / 2;

// Aqui estoy definiendo una variable segura
let varible_segura = "Este contenido es seguro";

// Aqui defino una constante
const pi = 3.14;

// Aplicar una modificaciones
numero_entero = 50;
// pi = 9;

var area_circulo = pi * (numero_decimal * numero_decimal);

console.log(cadena);
console.log("variable entera: ", numero_entero);
console.log("variable decimal: ", numero_decimal);
console.log("variable resultado: ", resultado);
console.log("El area de circulo es: ", area_circulo);

// LEER (obtener un dato del usario)

var respuesta = prompt("Ingresa tu libro favorito", "Harry Potter");
console.log("Tu respuesta es:", respuesta);

// Estructuras de control
