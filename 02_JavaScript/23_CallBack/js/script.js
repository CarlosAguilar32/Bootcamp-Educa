function traerUsers(callback){
  console.log("Loading...")
  setTimeout(()=>{
    //traer una lista de usuarios
    let response=["Julissa","Nicolle","Gilberto"];
    callback (response);
  } , 3000); //3 seconds
}
function MostrarUsers(users){
  console.log(users);
}



//main

traerUsers(MostrarUsers);

// EJEMPLO DE LATENCIA RECUPERAR INFORMACION

function traerUsers(callback) {
  console.log("loading...");
  setTimeout(() => {
    //traer una lista de usuarios
    let response = ["Julissa", "Nicolle", "Gilberto"];
    callback(response);
  }, 3000); // 3 seconds
}
function MostrarUsers(users) {
  console.log(users);
}

// MAIN
traerUsers(MostrarUsers);



// CALLBACKS AVANZADOS


//receta de panqueques
let estado = "Ingredientes";

// Hacer un panqueque
// 1. Mezclar ingredientes
// 2. Hornear
// 3. Decorar
// 4. Comer

// Funciones

function mezclar() {
  estado = "Mezcla lista";
  console.log(estado);
  hornear(decorar);
}
function hornear(_decorar) {
  console.log("Horneando...");
  setTimeout(() => {
    estado = "Panqueque horneado";
    console.log(estado);
    _decorar(comer);
  }, 2000);
}
function decorar(_comer) {
  console.log("Decorando...");
  setTimeout(() => {
    estado = "Panqueque decorado";
    console.log(estado);
    _comer();
  }, 2000);
}

function comer() {
  console.log(estado, "y listo para comer");
}

function prepararPaqueque() {
  estado = "Listo para empezar";
  console.log(estado);
  mezclar();
}

prepararPaqueque();
