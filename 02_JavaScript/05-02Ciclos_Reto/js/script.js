let random = Math.random(); // 0.01 ... 0.99

console.log("random:", random);

let suerte = random * 6; //  numero aletorio (1.??-5.??) -> 1 .. 5

console.log("suerte:", suerte);

//let dado2 = parseInt(suerte) + 1; //( 1 ... 5) + 1
//(0,1) * 10 = 0 - 9.?? +1
// let dado = parseInt(Math.random() * 10) + 1;
// (0,1) * 10 = 9.74 = 10

let dado=0
while (dado ==0){
 dado = Math.round(Math.random() * 6);
 console.log("dado:", dado);
}


let obj1 = document.getElementById("salida");
let obj2 = document.getElementById("mensaje");

if (dado == 1 ){ 
  obj1.innerHTML=`<img src='images/1.png' />`
}
if (dado == 2 ){ 
  obj1.innerHTML=`<img src='images/2.png' />`
}
if (dado == 3 ){ 
  obj1.innerHTML=`<img src='images/3.png' />`
}
if (dado == 4 ){ 
  obj1.innerHTML=`<img src='images/4.png' />`
}
if (dado == 5 ){ 
  obj1.innerHTML=`<img src='images/5.png' />`
}
if (dado == 6 ){ 
  obj1.innerHTML=`<img src='images/6.png'/>`
}

if (dado > 3) {
  obj2.innerHTML = ` Has ganado, ha salido  el número ${dado} `;
} else {
  obj2.innerHTML = ` Lo siento, ha salido el número ${dado} `;
}
/*
if (dado==0){
  obj2.innerHTML = ` Intentalo de nuevo `;
}
*/



