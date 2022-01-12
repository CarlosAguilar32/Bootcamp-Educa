//ASYC GETTERS
let planets = [];

async function getPlanetsData() {
  // get -> Obtener (Convención)
  //1. Hacer la petición (GET)
  // URL : https://handlers.education.launchcode.org/static/planets.json
  const response = await fetch(
    "https://handlers.education.launchcode.org/static/planets.json"
  );
  //2. Validar la respuesta
  if (!response.ok) throw Error(response.statusText); // Se detiene la ejecución
  //3. Extraer la informacion
  const data = await response.json();
  //4. Devolver la información
  return data;
}

// const planets = getPlanetsData(); // -> Promesa  (no la data)
async function main() {
  // obtener informacion de planetas
  planets = await getPlanetsData();
  let flag=true;

  planets.forEach((planet) => {
    const slides = document.querySelector("#carousel > .carousel-inner");
    console.log(slides);
    slides.innerHTML += ` 
        <div class="carousel-item ${flag?'active':''}">
        <img
          src="${planet.image}"
          class="d-block w-100"
          alt="..."
        />
        </div> `;
        flag=false;
});
  //procesar la información planetas
  console.log(planets);
}

// Llamar funcion principal
main();