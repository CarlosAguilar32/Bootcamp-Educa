//Métodos para tranformar 
// .repeat(n) => Devuelve el texto de la variable repetido n veces
// .toLowerCase() => Devuelve el texto de la variable en minúsculas
// .toUpperCase() => Devuelve el texto de la variable en mayúsculas
// .trim() => Devuelve el texto sin espacios a la izquierda y derecha
// .trimStart() => Devuelve el texto sin espacios a la izquierda
// .trimEnd() => Devuelve el texto sin espacios a la derecha
// .replace(str | regex,newstr) => Reemplaza la primera aprición del texto str por newstr
// .replaceAll(str | regex,newstr) => Reemplaza todas las apriciones del texto str por newstr
// .substr(ini, len) => Devuelve el subtexto desde la posición ini hasta ini+len
// .substring(ini, end) => Devuelve el subtexto desde la posición ini hasta ini+len
// .slice(ini, end) => Devuelve el subtexto desde la posición ini hasta ini+len
// .split(sep|regex, limit) => Devuelve el subtexto desde la posición ini hasta ini+len
// .substr(ini, len) => Devuelve el subtexto desde la posición ini hasta ini+len


console.log("Na".repeat(5)); //"NaNaNaNaNa"
console.log("MANZ".toLowerCase());//"manz"
console.log("manz".toLowerCase());//"MANZ"
console.log("    Hola   ".trim()); //"hola"

//Creación de objetos
let frase = "anita lava la tina"; //Literal
frase = new String("anita lava la tina"); //objeto

console.log(frase.replace("lava","{replace}"));
console.log(frase.replaceAll("la","{replace}"));

frase2 = new String("la ruta nos aporto otro paso natural"); //objeto
console.log(frase2)
console.log(frase2.substr(19));
console.log(frase2.substring(29,7));

//MINI APLICACION DE TRANFORMACIONES
let direccion = new String("Urb los patos 305");
console.log(direccion);
let numero_casa = direccion.substr(14, 3); // 305
numero_casa = direccion.substr(direccion.search("305"), "305".length); // 305

position = direccion.search("305"); // 14
console.log("numero de case : ", parseInt(numero_casa));


// Substring() vs Substr()

let palindromo2 = new String("a luna ese anula");
console.log(palindromo2);

console.log(palindromo2.substring(7)); //ese anula

console.log(palindromo2.substring(11,16));
console.log(palindromo2.substring(2,6));

// Convertir string a arreglo (Array)

let palindromo3 = new String(
    "A mamá, Roma le aviva el amor a papá, y a papá, Roma le aviva el amor a mamá"
);
console.log(palindromo3);
console.log(palindromo3.split(",")); //separación por comas
console.log(palindromo3.split(" ")); //separación por espacios

console.log(palindromo3.split("")); //muestra caracter por caracter

//rellenar caracteres tano a la derecha como izquierda

let palabra = new String("ocaso");

console.log(palabra); // 5 caracteres

console.log(palabra.padStart(10, "*")); // llenar por la izquierda hasta llegar a 10 caracteres
console.log(palabra.padEnd(15, "*")); // llenar por la derecha hasta llegar a 10 caracteres

