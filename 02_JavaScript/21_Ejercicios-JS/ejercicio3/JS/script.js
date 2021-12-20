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



