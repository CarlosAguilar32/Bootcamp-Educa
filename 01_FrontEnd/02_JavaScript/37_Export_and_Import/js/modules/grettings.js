const magicNumber = 42;

function sayHi($user){
    return `Hi ${$user}`
}
function sayHello($user){
    return `Hello ${$user}`
}
function decirHola($user){
    return `Hola ${$user}`
}


export default sayHi;
export {sayHi as saludo2,sayHello,decirHola,magicNumber};
