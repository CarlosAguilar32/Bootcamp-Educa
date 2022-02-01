//CONDICIONAL SIMPLE

var nota = 5;
console.log("He realizado mi examen.");

//Condición
if (nota >= 5) {
  console.log("¡Estoy aprobado");
}
console.log("");

//CONDICIONAL IF/ELSE  EJEMPLO-01
var nota = 4;
console.log("He realizado mi examen.");

if (nota < 5) {
  calificacion = "suspendido";
} else {
  calificacion = "aprobado";
}
console.log("Estoy", calificacion);
console.log("");

//CONDICIONAL IF/ELSE  EJEMPLO-02
var nota = 7;
console.log("He realizado mi examen. Mi resultado es el siguiente:");
if (nota < 5) {
  calificacion = "suspendido";
}
if (nota >= 5) {
  calificacion = "aprobado";
}
console.log("Estoy", calificacion);
console.log("");

//CONDICIONAL IF/ELSE  EJEMPLO-03
var nota = 7;
console.log("He realizado mi examen. Mi resultado es el siguiente:");

var calificacion = nota < 5 ? "Suspendido" : "Aprobado";

console.log("Estoy", calificacion);
console.log("");

//CONDICIONAL IF/ELSE  EJEMPLO-04
var nota = 7;
console.log("He realizado mi examen.");
if (nota < 5) {
  calificacion = "Insuficiente";
} else if (nota < 6) {
  calificacion = "Suficiente";
} else if (nota < 8) {
  calificacion = "Bien";
} else if (nota <= 9) {
  calificacion = "Notable";
} else {
  calificacion = "Sobresaliente";
}
console.log("He obtenido un", calificacion);
console.log("");

//SWITCH  EJEMPLO-01
var nota = 7;
console.log("He realizado mi examen. Mi resultado es el siguiente:");

switch (nota) {
  case 10:
    calificacion = "Sobresaliente";
    break;
  case 9:
  case 8:
    calificacion = "Notable";
    break;
  case 7:
  case 6:
    calificacion = "Bien";
    break;
  case 5:
    calificacion = "Suficiente";
    break;
  case 4:
  case 3:
  case 2:
  case 1:
  case 0:
    calificacion = "Insuficiente";
    break;
  default:
    calificacion = "Nota erronea";
    break;
}
console.log("He obtenido un",calificacion)
