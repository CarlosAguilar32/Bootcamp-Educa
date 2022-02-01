
/*var a=1;
console.log(a); //Aqui accedemos a la "a" global, que vale 1

function x() {
  console.log(a); //En esta linea el valor de "a" es undefined
  var a=5; //Aquí creamos una variable de tipo "a" a nivel de función
  
  console.log(a); //Aquí el valor de "a" es 5 (a nivel de función)
  console.log(window.a); //Aquí el valor de "a" es 5 (ámbito global)
}

x(); // Aqui se ejecuta el código de la función x()
console.log(a);//En esta línea de valor de "a" es 5
*/


//Opción 1: Bucle con let

console.log("Antes: ",p);  //Antes: underfined
for(let p=0; p < 3; p++){
  console.log("- ",p)      //Durante: 0, 1 , 
}
console.log("Después: ",p);//Después: underfined

//Opción 2: Bucle con var

console.log("Antes: ",p);  //Antes: underfined
for(var p=0; p < 3; p++){
  console.log("- ",p)      //Durante: 0, 1 , 2
}
console.log("Después: ",p);//Después: 3 (WTF!)