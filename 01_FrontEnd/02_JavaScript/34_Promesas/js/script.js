function timeout (sec){
    return new Promise (resolve => setTimeout(resolve,sec*1000))
}
async function getUsersData(){

    await timeout(3); //Simulando el tiempo de latencia 

    const options ={
        method:"GET",
        headers: {
            "Content-Type":"applications/json"
        },
    }

    //Traer información del Servidor
    const response = await fetch ("Data/users.json");
    
    //Validamos la respuesta
    if (!response.ok) { //Promesa se rechazó
        throw Error(response.statusText);
    }
    
    //Extraer la data 
    const data = await response.json(); //Métodos de procesamiento json() or text()
    return data;
}

//MAIN
async function main(){

    const users = await getUsersData()
                        .catch((err)=> console.warn(err));
    console.log(users)

    //Mostrar en un UL utilizando el DOM
    const list = document.querySelector("#list_users");
  
    users.forEach((element) => {
      const p = document.createElement("p");
      p.textContent = `${element.first_name} ${element.last_name} : ${element.email}`;
      list.appendChild(p);
    });
}

main();













/*
//MAIN (Estructurado -> Síncrono)


fetch("Data/users.json")
  .then((response) => {
    console.log("Validamos la respuesta de la peticion");
    //respuesta
    console.log(response); //https://developer.mozilla.org/es/docs/Web/HTTP/Status
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
    //Mostrar en un UL utilizando el DOM

    const list = document.querySelector("#list_users");

    data.forEach((element) => {
      const p = document.createElement("p");
      p.textContent = `${element.first_name} ${element.last_name}: ${element.email} `;
      list.appendChild(p);
      //list.insertAdjacentElement()
      //list.innerHTML="<p> </p>"
    });
  })
  .catch((err) => console.warn(err))
  .finally(() => console.log("La promesa ha finalizado"));
*/
