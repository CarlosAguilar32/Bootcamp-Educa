//Clausura: Función incr()
const incr = (function () {
  let num = 0;
  return function (){
    num++;
    return num;
  };
})();
  