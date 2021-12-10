//DECLARAR FUNCIONES
function saludo (){
    //Contenido de la función
    console.log("Hola, soy una función");
}
//LLAMADA
saludo();
console.log("");

/*
function table (){
    let num=2
    for (let i=0; i<=10; i++) {
        console.log(num + " x " + i + " = " + (num * i));
    }
}

table();
*/

//CAJA dE HERRAMIENTAS
function resultado (_num) {
    let multiplicacion = 1 * _num;
    return multiplicacion;
}

//MAIN

for (let i = 0; i <= 10; i++){
    console.log("1 x ", i ," = ", resultado(i));
}