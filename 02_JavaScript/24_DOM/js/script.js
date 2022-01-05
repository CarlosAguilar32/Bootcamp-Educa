/*CREANDO ELEMENTOS*/
/*
const divisor = document.createElement("div");
const comentario = document.createComment("Comentario");
const texto = document.createTextNode("Hola a todos");

//Modificar nuestro elemento creado
divisor.id = "header"; // id="header"
divisor.className = "box"; // class="box"
divisor.style = "background:lightgreen;";

console.log(divisor.hasAttributes()); // TRUE -> Tiene elementos
console.log(divisor.hasAttribute("name")); // FALSE -> No tiene attr name
console.log(divisor.getAttributeNames()); // ['id', 'class', 'style']
console.log(divisor.getAttribute("style")); // Valor del atributo style =>(background: lightgreen;)
divisor.removeAttribute("id"); // Eliminamos el atributo "id"
divisor.setAttribute("class", "caja"); // camabiamos el valor box -> caja

const attr_class = divisor.getAttributeNode("class"); // class="caja"
console.log(attr_class);
const class_extr = divisor.removeAttributeNode(attr_class); // attributo class extraido
console.log(class_extr);

const attr_style = divisor.getAttributeNode("style");
console.log(attr_style);
attr_style.value = "color:red;";
const style_mod = divisor.setAttributeNode(attr_style);
console.log(style_mod);
console.log(divisor);
*/
/*  MODIFICANDO EL HTML de un ELEMENTO*/
/*

// const divisor = document.getElementById("header");
const divisor = document.querySelector("#header");

console.log(divisor.nodeName); // DIV (Only read)

divisor.textContent = "Sub titulo <strong>01</strong>"; // No interpreta como html
console.log(divisor.textContent); // "Titulo principal"

divisor.innerHTML = "Sub titulo <strong>01</strong>"; // Modifica el html interno
console.log(divisor.innerHTML); // <h1>Titulo principal</h1>

divisor.outerHTML = "<h1> Header </h1>"; // Modifica todo el html incluyendo al contenedor
console.log(divisor.outerHTML); // <div id="header"> <h1>Titu...</div>
*/

const img = document.createElement("img");

img.src = "https://picsum.photos/200/300";
img.width = 200;
img.height = 300;
document.body.appendChild(img);

const div = document.createElement("div");
div.textContent = "Esto es un div insertado con JS.";
//CREANDO UN NODO H1    
const app = document.createElement("div"); //<div></div>
app.id="app";
app.appendChild(div);
