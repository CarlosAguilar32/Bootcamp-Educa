let arreglo = new Array (1, 100, 200, 2, 15, 23, 233, 5, 555, 854, 999, 12);
let max=0
for (let i = 0; i < arreglo.length ; i++){
    if (max < arreglo[i] ){
        max=arreglo[i]
    }
}
console.log(arreglo)
console.log("El valor mayor del vector es:",max)

/* EJERCICIO 1 RESUELTO*/
/*
// FUNCIONES
function searchBigNumber(_array) {
    //Inicializar variables
    let numero_mayor = -Infinity;
    //Proceso
    for (let i = 0; i < _array.length; i++) {
      // 1022 > -infinito?
      if (_array[i] > numero_mayor) {
        numero_mayor = _array[i];
      }
    }
    //Return
    return numero_mayor;
  }
  
  // MAIN
  //           0   1    2     3    4   5 ...                           12
  let array = [
    -1, -100, -4005, -1022, -15, -23, -233, -5, -482, -545, -854, -499, -12,
  ];
  
  console.log("El numero mayor es :", searchBigNumber(array));
*/