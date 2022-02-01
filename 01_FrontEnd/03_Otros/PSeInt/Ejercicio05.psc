Algoritmo sin_titulo
	n=0
	sum=0
	Dimension sucesion[10]
	
	Para i=1 Hasta 10 Con Paso 1 Hacer
		n=( (2 * i^3) - (5 * i) + 3 )
		sum=sum+n
		sucesion[i]=n
		Mostrar "Sucesión [",i,"] valor: ",sucesion[i]
		Mostrar "La sumatoria es: ",sum
		Mostrar ""
	Fin Para
FinAlgoritmo
