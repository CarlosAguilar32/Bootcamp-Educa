/* Busqueda por ID (Metodo tradicional Vs Moderno)*/
const page = document.getElementById("header");
const page2 = document.querySelector("#header")
console.log(page)
console.log(page2)

/* Busqueda por Clase (Metodo tradicional Vs Moderno)*/

const list = document.getElementsByClassName("box");
const first_item = document.querySelector(".box");
const list2 = document.querySelectorAll(".box")
console.log(list);
console.log(first_item);
console.log(list2);

/* Busqueda por selector personalizado (2do Div -> #content>)*/
const content_div = document.querySelector(".box:nth-child(2)")
console.log(content_div);

const content_div = document.querySelector("#header + div")
console.log(content_div);

/* Busqueda por nombre (Metodo tradicional Vs Moderno)*/

const opts = document.getElementsByName("genero");
console.log(opts);

const opts2 = document.querySelectorAll("[name='genero']");
console.log(opts2) ;

/* Busqueda por etiqueta (Metodo tradicional Vs Moderno)*/
const divs = document.getElementsByTagName("div");
const divs2 = document.querySelectorAll("div");
console.log(divs)
console.log(divs2)


const div = document.createElement("div");
const span = document.createElement("span")
const img = document.createElement("img")

