/*
//---------------------EJEMPLO 01--------------------------
//   <div id="container">
//  
//   </div>

// CREANDO UN NODO <div> (Contenedor)
const div = document.createElement("div");
div.id = "div_insertado";
div.textContent = "Texto insertado desde JS";

// CREANDO UN NODO <h1>
const h1 = document.createElement("h1");
h1.id = "title";
h1.textContent = "Titulo H1";

// Inserta el h1 (hijo) dentro del div (contenedor)
const container = document.querySelector("#container"); // busqueda
container.appendChild(div);

// Inserta un elemento en una posición
// (antes del elemento -> beforebegin)
// (antes del texto -> afterbegin)
// (despues del texto -> beforeend)
// (despues del elemento -> beforeend)
div.insertAdjacentElement("beforebegin", h1);

console.log(div);
*/

/*
//---------------------EJEMPLO 02--------------------------
//  <ul>
//    <li>Item 1</li>
//    <li>Item 2</li>
//    <li>Item 3</li>
//    <li>Item 4</li>
//  </ul>

const lista = document.querySelector("ul"); // 1 elemento
const items = document.querySelectorAll("ul > li"); // todos los elementos
//const items = document.getElementsByTagName("li");

console.log(items[0].isConnected);

console.log("Eliminando el item 1");
items[0].remove();
console.log(items[0].isConnected);

//lista.appendChild(items[0]); // insertarlo al final
lista.insertAdjacentElement("afterbegin", items[0]); // inserta al inicio
*/

/*
//---------------------EJEMPLO 03--------------------------
//ELIMINANDO ELEMENTOS DE DECENDENCIA DIRECTA

  
const lista = document.querySelector("ul"); // 1 elemento
const items = document.querySelectorAll("ul > li"); // todos los elementos

const item3 = document.querySelector("li:nth-child(3)");

// lista.removeChild(items[2]);
lista.removeChild(item3);

//document.body.removeChild(item3); // No Permitido (porque item3 no es hijo de body)
document.body.removeChild(lista); // Permitido

  
  
//REEMPLAZANDO UN ELEMENTO CON OTRO
  
  
const lista = document.querySelector("ul"); // 1 elemento
const items = document.querySelectorAll("ul > li"); // todos los elementos

const item2 = document.querySelector("li:nth-child(2)");
const item5 = document.createElement("li");

// Way #1
// const texto = document.createTextNode("Item 5");
// item5.appendChild(texto);

// Way #2
//item5.textContent = "Item 5";

// Way #3
item5.innerHTML = "Item 5";

lista.replaceChild(item5, item2);
*/