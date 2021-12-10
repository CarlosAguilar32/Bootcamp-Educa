/*i=0;// contador o iterador

while  (i<5){
    console.log("valor de i: "+i)
    i++; //Incrementamos el vlaor de i
}*/

/*
var contador=1;
let num

while ( (num != 7 && contador < 5 ) || num == 11) {
  let dato = prompt("Introduce  número del 1 al 10:", "");
  num = parseInt(dato);
  document.write(`El número introducido es ${num} </br>`);
  // ` -> "Alt + 96" or  "alt gr + }" or "tecla a lado de 'P'"
  // document.write("El número introducido es "+num+"</br>");
  document.write(` El contador es ${contador} </br> `);
  contador++; //contador = contador + 1;

}

document.write(`</br><h2>
    Fin del Programa </br>
    contador ya NO es menor que 5.   
    </h2>`);

document.write(`</br> Último número introducido es ${num}`);
*/


let contador = 1; // numerico
let dia = ""; // string
let feriado = ""; // Booleana
let fiesta = ""; // Booleana

while (true) {
  dia = prompt("¿Que día es hoy?");
  feriado = prompt("¿Es feriado?");

  document.write(`Ingresaste: ${dia}, y `);
  document.write(`${feriado} es feriado : `);

  if (dia == "Lunes" || dia == "Martes" || dia == "Miercoles") {
    document.write(`Si trabajas,`);
    if (dia == "Lunes" && feriado == "Si") {
      document.write(`Pero te pagan el doble`);
    }
    if (dia == "Martes" && feriado == "Si") {
      document.write(`Pero te pagan el triple`);
    }
    if (dia == "Miercoles" && feriado == "No") {
      document.write(`Pero te tienen que dar un dia libre`);
    }
  }
  if (dia == "Sabado" || dia == "Domingo") {
    fiesta = prompt("¿Saliste de fiesta?");

    document.write(`No trabajas es FDS,`);
    if ((dia == "Domingo" && feriado == "Si") || fiesta == "Si") {
      document.write(`y nadie te puede obligar a trabajar`);
    }
  }
  document.write(`</br>`);

  let accion = prompt("¿Deseas continuar?");
  if (accion != "Si") {
    break;
  }
}

document.write(`<br>Finalizo el programa`);


