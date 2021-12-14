console.log("Hola mundo")

//Forma tradicional
let array = new Array("a","b","c");
console.log(array);


//Mediante literales (preferida)
let array2 = ["a","b","c"];//Array con 3 elementos
console.log(array2);

//Inicializar un arreglo
let empty = [];//Array vacío (0 elementos)
console.log(empty);

const mixto = ["a", 5, true]; //Array mixto (String, number, boolean)
console.log(mixto);

let number = 3>6;
console.log (typeof(number));

//              0         1         2         3
let razas = ["poodle","labador","terrier","shihtzu"];
razas[0]; //poodle
razas[1]; //labrador
console.log(razas[2]); //"terrier"
const nro_razas = razas.length; //4
razas[nro_razas-1];//
razas[razas.length-1]//3

//propiedad o atributo => obj.propiedad
//función o método => obj.funcion()

let num_razas=razas.length
console.log("Numero de razas: ",num_razas);

//obj  .método
console.log ()

const arreglo = ["a","b","c"];
console.log(arreglo)

arreglo.push("d") //Devuelve 4, ahora arreglo=["a","b","c","d"]
console.log(arreglo); 


arreglo.pop();// Devuelve "d". Ahora arreglo=["a","b","c"]
console.log(arreglo)

arreglo.unshift("Z")//Devuelve 4, ahora arreglo=["Z","a","b","c"]
console.log(arreglo)

arreglo.shift(); //Devuelve "Z". Ahora aareglo = ["a","b","c"]
console.log(arreglo)

/*----------------------AÑADIR O ELIMINAR ELEMENTOS----------------------------------------------------------------*/

// Bajara de 4 cartas (cara hacia arriba)
let baraja = ["5 picas", "J Diamante", "5 trebol", "A corazones"];

console.log(baraja); // ['5 picas', 'J Diamante', '5 trebol', 'A corazones']
baraja.push("Q corazones"); // añadir una carta a la pila (desde arriba)
console.log(baraja); // ['5 picas', 'J Diamante', '5 trebol', 'A corazones' , 'Q corazones']

let carta = baraja.pop(); //  Quito la ultima carta (Q de corazones)
console.log(carta); // Q corazones

let carta2 = baraja.pop(); //  Quito la ultima carta (A de corazones)
console.log(carta2); // A de corazones

console.log("Ahora tengo", baraja); // ['5 picas', 'J Diamante', '5 trebol']

baraja.unshift("3 diamante"); // quitar una carta desde principio (Abajo)

console.log("Despues añadir al comienzo", baraja); //['3 diamante', '5 picas', 'J Diamante', '5 trebol']

let carta3 = baraja.shift(); // quitamos una carta del comienzo (Abajo)
console.log(carta3); // 3 diamante

let carta4 = baraja.shift(); // quitamos una carta del comienzo (Abajo)
console.log(carta4); // 5 picas

/*-----------------------PUSH  Vs CONCAT-----------------------------------------*/ 
let array5=[1,2,3];
console.log(array5);
array5.push(4,5,6)  //Devuelve 6. Ahora array3 = [1,2,3,4,5,6]
console.log(array5);
array5.push([7,8,9])  //Devuelve 7. Ahora array3 = [1,2,3,4,5,6,[7,8,9]]
console.log(array5);
console.log();
let array6 = [1,2,3];
console.log(array6);
array6=array6.concat(4,5,6)//Devuelve 6. Ahora array3 = [1,2,3,4,5,6]
console.log(array6);
array6 =array6.concat([7,8,9])  //Devuelve 9. Ahora array3 = [1,2,3,4,5,6,7,8,9]
console.log(array6);

console.log();
let barajaA = new Array(
    "A diamantes",
    "4 corazones",
    "2 trebol",
    "4 de trebol"
  );
  let barajaB = new Array("5 diamantes", "Q trebol", "8 corazones");
  
  // USANDO PUSH()
  
  // barajaA.push(barajaB) // => genera un array dentro de otro array
  // barajaA.push(["5 diamantes", "Q trebol", "8 corazones"])
  // console.log(barajaA);
  
  // USANDO CONCAT()
  
  let barajaC = barajaA.concat(barajaB);
  
  console.log("Baraja A", barajaA);
  console.log("Baraja B", barajaB);
  console.log("Baraja C", barajaC);
  console.log();


/*-----------------------------------METODO SLICE---------------------------*/

let arraySlice = ["a","b","c","d","e"];
console.log(arraySlice)
//.slice()  no modifica el array
//arraySlice.slice(2,4) //Devuelve ["c","d"] El array no se modifica
x=arraySlice.slice(2,4)
console.log(x)
console.log();

const fruits =["Apple","Banana","Mango","Grape","Orange","Pear","Cherry"];  
console.log(fruits)
console.log()

console.log("SLICE")
let sub_frutas = fruits.slice(1,3)
console.log(sub_frutas)
console.log()

console.log("SPLICE")
let spliced_frutas = fruits.splice(0,2)
console.log(fruits)
console.log(spliced_frutas)
console.log()

/*--------------------Busqueda y comprobación--------------------------*/ 




