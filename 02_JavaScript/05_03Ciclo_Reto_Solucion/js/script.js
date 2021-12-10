let numero=0
while (numero ==0){
 numero = Math.round(Math.random() * 6); // let numero = Math.round(Math.random() * 6);
}
let obj_dado = document.getElementById("salida");
let obj_mensaje = document.getElementById("mensaje");

obj_dado.innerHTML = "<img src='images/rolling.gif' />";


function validarNumero(copy_numero, copy_obj_dato) {
    copy_obj_dato.innerHTML = `<img src='images/${copy_numero}.png' />`;
    obj_mensaje.innerHTML = "El numero es : " + numero;
};
setTimeout(validarNumero, 2000, numero, obj_dado);


/*

function validarNumero() {
    switch (numero) {
        case 1:
          // Dibujar lado del dado => 1
          obj_dado.innerHTML = "<img src='images/1.png' />";
          break;
        case 2:
          obj_dado.innerHTML = "<img src = 'images/2.png' />";
          break;
        case 3:
          obj_dado.innerHTML = "<img src = 'images/3.png' />";
          break;
        case 4:
          obj_dado.innerHTML = "<img src = 'images/4.png' />";
          break;
        case 5:
          obj_dado.innerHTML = "<img src = 'images/5.png' />";
          break;
        case 6:
          obj_dado.innerHTML = "<img src = 'images/6.png' />";
          break;
      }
      obj_mensaje.innerHTML = "El numero es : " + numero;
};
setTimeout(validarNumero,2000)

*/

/*

setTimeout(() => {
  switch (numero) {
    case 1:
      // Dibujar lado del dado => 1
      obj_dado.innerHTML = "<img src='images/1.png' />";
      break;
    case 2:
      obj_dado.innerHTML = "<img src = 'images/2.png' />";
      break;
    case 3:
      obj_dado.innerHTML = "<img src = 'images/3.png' />";
      break;
    case 4:
      obj_dado.innerHTML = "<img src = 'images/4.png' />";
      break;
    case 5:
      obj_dado.innerHTML = "<img src = 'images/5.png' />";
      break;
    case 6:
      obj_dado.innerHTML = "<img src = 'images/6.png' />";
      break;
  }
  obj_mensaje.innerHTML = "El numero es : " + numero;
}, 2000);

*/

