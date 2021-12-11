//FUNCIONES


function generarNumeroAleatorio(min, max){
  //Entrada: numero maximo
  //Salida: Numero aleatorio entre 0 - numero maximo

  //Inicialización de Variables
  let suerte = 0;
  let random = 0;

  suerte = Math.random() * (max - min);
  random = min + Math.round(suerte);

  return random
}

function avanzar(){
  let metros = 0;
  metros = generarNumeroAleatorio( 10 , 20)
  return metros;
}

//MAIN


let auto = 0; //Metros
const META = 100;

let autos=0
let i=0

while (autos < META){
  i++;
  auto = avanzar(); // Avanzar
  //auto = auto + avanzar();

  console.log (i, " El auto avanzó ",auto," metros")

  autos=autos+auto;

  console.log ("El auto recorrió ",autos," metros en total")
  console.log()
}

/*
let auto = 0; //Metros
const META = 100;

do{
  auto += avanzar(); // auto = auto + avanzar();
  console.log("El auto avanzó ",auto)

}while(auto < META)// auto > 100

console.log("Total recorrido: ",auto,"metros")
*/

