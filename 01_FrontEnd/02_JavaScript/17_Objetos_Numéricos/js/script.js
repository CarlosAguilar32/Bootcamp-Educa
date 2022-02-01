/*
//Literales
const n1= 4;
const n2 = 15.8;

//Objetos
const n3 = new Number ();
const n4 = new Number (16.6);

console.log(n1);
console.log(n2);
console.log(n3);
console.log(n4);
//---------------------------------------

//¿Número finito?
Number.isFinite(42) //true
Number.isFinite(Infinity) //false, es infinito

//¿Número entero?
Number.isInteger(5) //true
Number.isInteger(4.6) //false, es decimal

//¿Número seguro?
Number.isSafeInteger(1e15) //true
Number.isSafeInteger(1e16) //false, es un vlaor no seguro

//¿No es un número?
Number.isNaN(NaN) //true
Number.isNaN(5) //false, es un numero0

//---------------------------------------

let text_number ="384.42" //String
console.log(Number.parseFloat(text_number))
console.log(Number.parseInt(text_number))



(1.5).toExponential(2);//"1.50e+0" en exponenecial
(1.5).toFixed(2); "1.50" //"1.50" en punto fijo
(1.5).toPrecision(1); "1.50" //"2"



let decimal =124;
let binario ="1111100"; //base 2
let octal ="84"; //base 8
let hexadecimal ="7C"; //base 16

console.log(Number.parseInt(binario,2));
console.log(Number.parseInt(octal,8));
console.log(Number.parseInt(hexadecimal,16));

*/

let number =1.5;
console.log(number.toExponential(4))
console.log(number.toFixed(5))
console.log(number.toPrecision(1))