//CAJA DE HERRAMIENTAS => FUNCIONES ()
function verEstadoMadera (estado){
  console.log("El estado de la madera es: ",estado);
}
function serruchar (_madera){
  console.log("Estoy serruchando un", _madera);
  _madera="Piezas de madera de " + madera; //roble
  return _madera;
}

function taladrar (_piezas, _broca){
  console.log("Estoy taladrando unas",_piezas,"con una broca de ",_broca);
  piezas_orificios = _piezas + " con orificios de "+_broca;
  return piezas_orificios;
}

function atornillar (piezas_orificios, n_tornillos){
  console.log("Estoy atornillando unas "+piezas_orificios, "con "+n_tornillos+ " Tornillos");
  _madera = "Mesa ensamblada";
  return _madera;
}

function martillar (mesa){
  console.log("Estoy martillando una ",mesa,"para probar su resistencia");
  mesa_final = "Mesa resistente (Prueba exitosa)";
  return mesa_final;
}

//===============================================
// PROGARMA PRINCIPAL (MAIN)
//Voy a construir una mesa

//PASO 0: COMPRAR UNA MADERA
let madera="Roble";
verEstadoMadera(madera);

//PASO 1: CORTAR LA MADERA
madera = serruchar(madera); //la madera está cortada
verEstadoMadera(madera);

//PASO 2: HACER HUECOS
let broca="3/8"
madera=taladrar(madera,broca); // 
verEstadoMadera(madera);

let tornillos_38=20;

//PASO 3: UNIR LAS PIEZAS
madera=atornillar(madera, tornillos_38); //Mesa ensamblada
verEstadoMadera(madera);

//PASO 4: PROBAR LA RESISTENCIA DE LA MESA
madera=martillar(madera);