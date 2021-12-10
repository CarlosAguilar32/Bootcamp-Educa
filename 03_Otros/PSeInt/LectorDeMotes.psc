Algoritmo LectorDeMotes
	n_mascotas = 0
	
	Mostrar 'Ingresa el numero de mascotas'	
	leer n_mascotas
	Mostrar ''
	
	Dimension  motes[n_mascotas]
	
	Para i=1 Hasta n_mascotas con Paso 1 Hacer
		
		Mostrar '¿Cómo s ellama tu ',i,'° mascota?'
		Leer motes[i]
		
	FinPara
	
	Mostrar ''
	
	Para i=1 Hasta n_mascotas con Paso 1 Hacer
		Mostrar 'Mote de mascota No.',i,': ',motes[i]
	FinPara
	
FinAlgoritmo
