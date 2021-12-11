function tablaMultiplicar (tabla, hasta=10){
  for(i=0;i<=hasta; i++) {
    console.log(tabla, "x",i, "=",tabla*i);
  }
}
tablaMultiplicar(2);
tablaMultiplicar(2, 15);
