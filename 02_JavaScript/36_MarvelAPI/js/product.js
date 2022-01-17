import CLIENT from "./modules/client.js";
import STORAGE from "./modules/storage.js";
import DOM from "./modules/dom.js";

import { comicRender } from "./modules/renders.js";
import DOM from "./modules/dom.js";

// Crear la funcion main para consumir el recurso...
async function main() {
  //Obtenemos ID almacenado en el storage
  const product_id = STORAGE.get("product_id");
  //Obtener la data del servidor para ese ID
  const data = await CLIENT.sendRequest("comics/" + product_id);
  //Transformar la data en información relevante
  const comic = comicRender(data);

  //Actualizar información del HTML
  const card = DOM.find("#comic_card"); //busqueda en documento

  DOM.find("#comic_image", card).textContent = comic.image;
  DOM.find("#title", card).textContent = comic.title; //Busquedad dentro de card
  DOM.find("#price", card).textContent = "$" + comic.price.sale;
  DOM.find("#format", card).textContent = comic.format;
  DOM.find("#description", card).innerHTML = comic.description;
  DOM.find("#stock", card).innerHTML = comic.stocks;
  //enlistamos los creadores
  comic.creators.forEach(({ name, role }) => {
    const li = DOM.create("li");
    li.textContent = `${creator.name} - ${creator.role}`;
    DOM.find("#creators", card).appendChild(li);
  });

  DOM.find("#btn_add").addEvenListener('click',()=>{
    const {id, title,price:{sale}}=comic
    STORAGE.setArray('cart',{id,title,sale});
    window.location.href="index.html"
  })
}

main();
