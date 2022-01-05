/*
const button = document.querySelector("#btn_grettings");

const saludar = () => {
  alert ("Hello World!");
};

const salut = () => {
  alert ("Salut Monde!");
};

//Añadiendo un call to action -> EventListener
button.addEventListener("click",saludar); //CALLBACK
button.addEventListener("click",()=>
setTimeout(salut,3000));

//Añadiendo un call to action -> EventListener
button.removeEventListener("click",saludar); //CALLBACK
// button.removeEventListener("click",salut); //CALLBACK
*/

const button = document.querySelector("#btn_grettings");

const saludar = () => {
  consolelog(event);
  alert("Hello World!");
};
//Añadiendo un call to action -> EventListener
button.addEventListener("click",saludar); //CALLBACK



