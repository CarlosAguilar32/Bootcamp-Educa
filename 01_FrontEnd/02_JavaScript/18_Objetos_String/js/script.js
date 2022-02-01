// Literales
const texto01 = "¡Hola a todos!";
const texto02 = "Otro mensaje de texto";

//Objeto
const texto03 = new String ("¡Hola a todos!");
const texto04 = new String ("Otro mensaje de texto");

console.log(texto01);
console.log(texto02);
console.log(texto03);
console.log(texto04);

console.log(` "${texto02}" tiene ${texto02.length} caracteres`)

"Manz".charAt(0);//"M"
"Manz".charAt(1);//"a"
"Manz".charAt(10);//""
"Manz"[0];//"M"
"Manz"[1];//"a"
"Manz"[10];//"undefined"

let frase1 = "Camarón que se duerme se lo lleva la corriente";
let frase2 = "En boca cerrada no entran moscas";
let frase3 = "Feliz como una lombiz";
let frase4 = "De tal palo tal astilla";
let frase5 = "Mal de muchos, consuelo de poco";
let frase6 = "'¡Chinchilete!', ¡Yo macehte!";
let frase7 = "Más vale tarde que nunca";
let frase8 = "El pato que no conoce el océano en cualquier charco";
let frase9 = "Ya nos cayó el chahuistle";
let frase10 = "No hay peor ciego que el que no quiere ver";

console.log(frase3);
console.log(frase3.length); //
console.log(frase3.charAt(0)); //0-21
console.log(frase3.charAt(6)); //0-21
console.log(frase3.charAt(11)); //0-21
console.log(frase3.charAt(15)); //0-21

console.log(frase10);
frase7=frase7.concat(" que") ;
frase7=frase7+" tonto";
frase7=`${frase7} que no`;
frase7+=" lo haga";


frase10 = new String (frase10)
frase7 = new String (frase7)

console.log(frase7);
console.log(frase10);

let pos = frase7.indexOf('g');
console.log(pos)

console.log(frase7.indexOf('tonto'));
console.log(frase7.indexOf('taza'));
console.log(frase7.indexOf('que',18));


"Manz".startsWith("M");//true ("Manz" empieza por "M")
"Manz".startsWith("a",1); //true ("anz" empieza por "a")
"Manz".endsWith("o"); //false ("Manz" no acaba en "o")
"Manz".endsWith("n",3); //true ("Man" acaba en "n")
"Manz".includes("an"); //true ("Manz" incluye "an")
"Manz".includes("M",1); //false ("anz" no incluye "M")

console.log(frase9.startsWith("Y"))
console.log(frase9.startsWith("a",1))
console.log(frase9.endsWith("e"));
console.log(frase10.endsWith("ciego",17));
console.log(frase9.includes("an"));
console.log(frase9.includes("M",1))
