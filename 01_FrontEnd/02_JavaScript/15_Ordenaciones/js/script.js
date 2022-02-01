let array = ["Alberto", "Ana","Mauricio","Bernardo","Zoe"];
console.log(array);

array.sort(); //["Alberto", "Ana","Bernardo","Mauricio","Zoe"]
console.log(array);

array.reverse();//["Zoe", "Mauricio","Bernardo","Ana","Alberto"]
console.log(array);

console.log();
/**--------------------------------------------------------------------- */
const months =["Octubre","Febrero","Marzo","Julio","Enero"]
console.log(months)

months.sort();
console.log(months)

months.reverse();
console.log(months)

console.log();
/**--------------------------------------------------------------------- */
const num=[1,8,2,32,9,7,4];
console.log(num)
//Función de comparación para la ordenación natural
const fc = function (a, b){
  return a - b;
};

num.sort(fc); //Devuelve[1,2,4,7,8,9,32],que Sí es el resultado deseado
console.log(num)
console.log();
/**--------------------------------------------------------------------- */
const objeto = new Object(); //Manera tradicional

const objeto2 = {}; //Manera resumida

const player = {
  name:"Manz",
  life= 99,
  strength: 10,
}
console.log(player.name)
console.log(player.life)

console.log(player["name"])
console.log(player["life"])



let coche ={
  //Atributos
  color: "Blanco",
  marza: "Toyota",
  modelo: "Corola",
  kilometros: 0,
  año: 2021,
  cantidad_puertas:4,
  nuevo: true,
  gasolina: true,
  automatico: false,
  //metodos
  arrancar(){
    return "Estoy arrancando..";
  },
  acelerar(){
    return "Estoy Acelerando..." 
  },
  frenar:() =>{
    return "Estoy frenando..."
  }
}
console.log(coche.año)
console.log(coche.arrancar) //devuelve todo el código de la función
console.log(coche.arrancar())//Ejecuta la función

const guitarra = {}
guitarra.marca ="Hendrix"
guitarra.tipo="Telecaster"
guitarra["color"]="Negro"
guitarra["amplificador"]=true
guitarra["precio"]=1649
