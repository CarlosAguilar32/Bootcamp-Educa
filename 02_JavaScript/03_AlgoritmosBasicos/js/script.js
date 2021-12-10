/*console.log('Área de un triángulo')
//Variables
let base=0.0
let altura=0.0
let area=0.0

//Entrada de datos
base = prompt('Ingresa la base del triagulo');
base=parseFloat(base)
console.log('Base: '+base)

altura = prompt('Ingresa la altura del triagulo');
altura=parseFloat(altura)
console.log('Altura: '+altura)

//Salida de datos
area=((base * altura)/2)
console.log('El área de un triangulo es: '+area)

console.log('')

console.log('Área de un Cilindro')
const pi=3.1416
let radio=0.0
area=0.0
altura=0.0

radio = prompt('Ingresa el radio del cilindro');
radio=parseFloat(radio)
console.log('Radio: '+radio)

altura = prompt('Ingresa la altura del cilindro');
console.log('altura: '+altura)

area=( (2*pi*radio*altura) + ( (2*pi*radio*altura)^2) )

console.log('El área de un cilindro es: '+area)

*/


//EJEMPLO:

//algoritmo: Área del triangulo
//Entrada: Lado 1 (lado1), Lado 2 (lado2) y Lado 3 (lado3)
//Salida: Área del trángulo (area)

//Inicialización de variables
lado1 = 0.0
lado2 = 0.0
lado3 = 0.0
semiperimetro = 0.0
area = 0.0

//Aqui solicito info com prompt
lado1 = prompt('Ingresa Lado 1') //dato de pureba
lado1 = parseFloat(lado1)

lado2 = prompt('Ingresa Lado 2') //dato de pureba
lado2 = parseFloat(lado2)

lado3 = prompt('Ingresa Lado 3') //dato de pureba
lado3 = parseFloat(lado3)

//Calcular el semiperimetro => (l1+l2+l3)/2

semiperimetro= (lado1 + lado2 + lado3)/2
//calcular el are RAIZ (sem (sem-l1) (sem-l2) (sem-l3) )
Math.sqrt(
    semiperimetro*
    (semiperimetro - lado1)*
    (semiperimetro - lado2)*
    (semiperimetro - lado3)
)
console.log(area)







/*console.log("Hola mundo");
//alert('Hello');

// Algoritmo : Área del triangulo
// Entrada : Base (base_01) y Altura (altura_01)
// Salida : Área del triangulo (area_01)

let base_01 = prompt('Ingresa la base del triagulo');
let altura_01 = prompt('Ingresa la altura del triagulo');

area_01=((base_01*altura_01)/2)

console.log('El área del triángulo es:',area_01)

// Algoritmo : Área del cilindro y Volumen del cilindro
// Entrada : radio (radio_02) y Altura (altura_02)
// Salida : Área del cilindro (area_02) y Volumen del cilindro (volumen_02)
let radio_02 = prompt('Ingresa el radio del cilindro');
let altura_02 = prompt('Ingresa la altura del cilindro');

const pi = 3.1416;
area_02=( (2*pi*radio_02*altura_02) + ( (2*pi*radio_02*altura_02)^2) )
volumen_02=((2*pi*(radio_02^2))*altura_02)
console.log('El área del cilindro es:',area_02)
console.log('El volumen del cilindro es:',volumen_02)*/





// Algoritmo : Área del trapesio
// Entrada : Base inferior (bi),Base superior (bs) y Altura (h)
// Salida : Área del trapecio (area)

// Inicialización de variables
/*let bi = 0.0;
let bs = 0.0;
let h = 0.0;
let area = 0.0;*/



// Solicitar informacion al usuario con prompt
// prompt -> Pide info al usuario similar -> LEER (pseInt)
/*bi = prompt("Ingrese la base inferior");
console.log("bi es una variable del tipo :", typeof bi); // string

bi = parseFloat(bi);
console.log("bi despues de parseFloat es del tipo", typeof bi); // number

bs = prompt("Ingrese la base superior");
bs = parseFloat(bs);

h = prompt("Ingrese la Altura");
h = parseFloat(h);

console.log("Base inferior", bi);
console.log("Base superior", bs);
console.log("Altura", h);*/

// Cálculo del area del trapecio
/*area = ((bi + bs) * h) / 2;
console.log("El area de trapecio es: ", area);*/
