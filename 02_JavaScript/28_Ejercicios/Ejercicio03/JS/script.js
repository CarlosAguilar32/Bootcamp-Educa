function borrar(){
    const lista = document.querySelector("select"); // 1 elemento
    const item = document.querySelector("option:nth-child(1)");
    lista.removeChild(item);
}
    
boton.addEventListener("click",borrar);
