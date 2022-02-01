// Declaración de la función
function tabla (num){
  for (let i=0; i<= 10; i++){
    console.log (num," x",i,"=",num*i);
    document.write (num," x ",i," = ",num*i+`</br>`);
  }
  document.write (`</br>`);
  console.log()
}

// Bucle que ejecuta 3 veces la función tabla()
let num = prompt("Ingrese un número");
//let num=5
for (let i=0; i<3; i++){
  tabla(num);
}