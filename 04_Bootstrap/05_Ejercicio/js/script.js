/*
function displayOnConsole(message="Hello"){
    console.log(`Message : '${message}' was sent after 5 seconds`);
}

function stopProcess(_id){
    console.log("El proceso",_id," se ha detenido");
    clearInterval(_id);
}


// setTimeout(displayOnConsole,5000);

console.log("Tarea síncrona"); // automaticamente

let intervalID = setInterval(displayOnConsole,1000); /// Después de 1 segundo
// let intervalID = setInterval(displayOnConsole,1000*60*5); // Después 5MIN

console.log("IntervalId:",intervalID)


setTimeout(()=>stopProcess(intervalID),5000);

*/

//-------------------CONSUMIR UNA PROMESA----------------------------------

// PETICIONES CON FETCH
/*

fetch('data/robots.txt')
.then((response)=>{
    console.log(response); // Informacion recuperada correctamente
    return response.text(); // return Promise 
}).then( (data) => {
    console.log(data)
}).catch( (error) => {
    console.log(error);
}).finally(()=> { console.log("Promise ended");})

*/
//-------------------IMPLEMENTACIÓN CON PROMESAS----------------------------------
/*
let saludo = "No data";

fetch('data/robots.txt')
.then(response => response.text())// return Promise 
.then(data => {
    console.log('inside promise:',data);
    saludo = data;
})
.catch(error => console.log(error))
.finally(() => console.log("Promise ended"))

setTimeout(()=>{
    console.log('outside promise',saludo)
},3000);
*/
/*
const doTask = (iterations) => new  Promise((resolve, reject) =>{
  const numbers =[];
  for (let i=0; i<iterations; i++){
    const number = 1 + (Math.random()*6);
    numbers.push(number);
    if(number==6){
      reject({
        error:true,
        message:"Se ha sacado un 6"
      });
    }
  }
  resolve({
    error: false,
    value: numbers
  });
});
*/

// CREAR UNA PROMESA

/*
const doTask = (iterations) => 
    new Promise((resolve, reject) => {
        const numbers = [];
        for(let i = 0 ; i < iterations; i++ ){
            const number = 1 + Math.round(Math.random()*6);
            numbers.push(number);
            if(number === 6){
                reject({
                    error: true,
                    message : "Salio un 6",
                    value: numbers
                })
            }
        }
        resolve( {
            error: false,
            message: "todo ok",
            value: numbers,
        })
    });

doTask(5)
.then(result => console.log(result))
.catch(result => console.log(result))
*/

/*--------------------------------------SIMULANDO UN CASO REAL-------------------------------------- */
async function getData() {
  //TRAER INFORMACIÓN DEL SERVIDOR
  fetch("data/users.json")
    .then((response) => {
      console.log(response);
      if (!response.ok) {
        //true or false
        throw Error(response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      return data;
      
    })
    .catch((error) => console.warn(error));
}


//MAIN

const data= await getData();
console.log(data)

// const list = document.getElementById("list_users");
//       data.forEach((user) => {
//         //console.log(user);
//         const p = document.createElement("p");
//         p.textContent = user.email;
//         list.appendChild(p);
//       });