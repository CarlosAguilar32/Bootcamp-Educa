Algoritmo Numeros_primos
	Definir limite, num_p, contador, nums_d, divisor como enteros
	
	Escribir "Ingrese el limite de busqueda"
	leer limite	
	
	num_p=0
	contador=1
	nums_d=1

	Mientras contador <= limite  Hacer
		
		num_p = num_p + 1
		nums_d = 1
		divisor = 0
		
		mientras nums_d <= num_p Hacer
			
			si num_p % nums_d = 0
				divisor = divisor + 1
			FinSi
			
			nums_d=nums_d+1
		FinMientras
		
		si divisor = 2 Entonces
			Escribir contador, ". El numero ",num_p," es primo "
			contador = contador+1
		FinSi
		
	FinMientras
FinAlgoritmo

