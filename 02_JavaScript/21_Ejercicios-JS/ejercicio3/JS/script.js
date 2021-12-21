let frase1= new String ("anita lava la tina");
let frase2= new String ("amor a roma");
let frase3= new String ("ligar es se agil");


function verificar(frase) {
    frase=frase.replaceAll(" ","");
    const palindromo = frase.split("").reverse().join("");
    /*
    .split(''): lo separa en un array.
    .reverse(): revierte el arreglo.
    .join(''): Lo vuelve a convertir en string.
    */
    return palindromo === frase ? "es palindromo" : "no es palindromo";
    /*
    Operador ternario sintaxis:
    condición ? expr1 : expr2 
    */ 
  }
  console.log(frase1,verificar(frase1));
  console.log(frase2,verificar(frase2));
  console.log(frase3,verificar(frase3));

/*
// EJERCCIO 3 RESULETO


// Funciones

// Funciones

// Funciones

function isPalindromo(_frase) {
  let frase_sin_espacios = _frase.replaceAll(" ", "");

  let array_chars = frase_sin_espacios.split("");
  //array_chars = [...frase_sin_espacios];
  //array_chars = Array.from(frase_sin_espacios);

  let reverse_array = array_chars.reverse();

  let frase_invertida = reverse_array.join(""); // Juntar los caracteres en un String

  //   if ( frase_sin_espacios == frase_invertida ) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  return frase_sin_espacios == frase_invertida; // TRUE or FALSE
}
// Main

// arreglo de carecteres
let frase = "anita lava la tina";

// return TRUE or FALSE si es palindromo
let resultado = isPalindromo(frase);

console.log(
  `La frase ${frase}`,
  resultado ? "ES" : "NO ES", // if(resultado== true) "ES" else "No es"
  "un Palindromo"
);
*/

