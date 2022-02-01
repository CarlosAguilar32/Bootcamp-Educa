/**--------------------------MUNDIAL------------------------------------------- */

let estadio = {
  //atributos
  name: "Luisail",
  country: "Catar",
  competition: "Copa del mundo",
  aforo: 8000,

  //Métodos
  match(equipo_A, equipo_B) {
    let goles_A = 0;
    let goles_B = 0;
    let resultado = "";
    let ganador="";
    let puntos=0;

    goles_A = Math.round(Math.random() * 5); // 0-5
    goles_B = Math.round(Math.random() * 5); // 0-5

    equipo_A.goles += goles_A
    equipo_B.goles += goles_B



    if (goles_A = goles_B & goles_A>0 & goles_B>0){
      equipo_A.puntos+=1
      equipo_B.puntos+=1
    }
    if (goles_A>goles_B){
      equipo_A.puntos+=3
      equipo_B.puntos+=0
    }
    if (goles_B>goles_A){
      equipo_A.puntos+=0
      equipo_B.puntos+=3   
    } 

    if (equipo_A.puntos>equipo_B.puntos){
      ganador=equipo_A.name
      puntos=equipo_A.puntos
    }else{
      ganador=equipo_B.name
      puntos=equipo_B.puntos
    }
    
    //resultado = equipo_A.name +" vs " + equipo_B.name +
    // " Score: " + goles_A +" - " + goles_B;
    resultado = ` ${equipo_A.name} VS ${equipo_B.name} Score : ${goles_A} - ${goles_B}`
    return resultado;
  },
  end(){
    let ganador="";
    let puntos=0;
  }
};

let team_psg = {
  name: "PSG",
  country: "France",
  color: "Azul y Blanco ",
  goles: 0,
  puntos: 0,
};

let team_america = {
  name: "América",
  country: "México",
  color: "Crema y Rojo ",
  goles: 0,
  puntos: 0,
};

let team_cristal = {
  name: "Cristal",
  country: "Peru",
  color: "Celeste",
  goles: 0,
  puntos: 0,
};

let team_comunicaciones = {
  name: "Comunicaciones",
  country: "Guatemala",
  color: "Blanco y Celeste",
  goles: 0,
  puntos: 0,
};

//MAIN
//const resultado = estadio.match(team_comunicaciones,team_cristal)
//console.log(resultado)

console.log(estadio.match(team_comunicaciones,team_cristal))
console.log(estadio.match(team_psg,team_cristal))
console.log(estadio.match(team_america,team_psg))
console.log(estadio.match(team_cristal,team_psg))



console.log(team_comunicaciones)
console.log(team_cristal)
console.log(team_america)
console.log(team_psg)
