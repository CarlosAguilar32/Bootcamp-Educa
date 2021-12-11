//CONSTANTES
const Pi=3.14159265358979323846264338327950288419716939937510;
//FUNCIONES

function suma(num1, num2){
  let resultado = num1 + num2;
  return resultado;
}
function resta(num1, num2){
  let resultado = num1 - num2;
  return resultado;
}
function multiplicacion(num1, num2){
  let resultado = num1 * num2;
  return resultado;
}
function division(num1, num2){
  let resultado = num1 / num2;
  return resultado;
}
function modulo(num1, num2){
  let resultado = num1 % num2;
  return resultado;
}
function raizCuadrada(num1){
  let resultado = Math.sqrt(num1);
  return resultado;
}
function areaTrapecio(base1, base2, altura){
  let resultado = altura*((base1+base2)/2);
  return resultado;
}
function areaCirculo(radio){
  let resultado = Pi* Math.pow(radio, 2);
  return resultado;
}

function areaCilindro(radio, altura){
  let resultado = 2*Pi*radio*(radio+altura);
  return resultado;
}

function areaTriangulo(num1, num2, num3){
  let semiperimetro = ((num1 + num2 + num3) / 2);
  let resultado =  Math.sqrt( semiperimetro * (semiperimetro - num1)*(semiperimetro - num2)*(semiperimetro - num3));
  return resultado;
}

//MAIN
console.log ("Calculadora intgrada correctamente");


