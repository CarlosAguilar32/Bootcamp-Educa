Algoritmo Ejercio_2_Sumatoria
	
	//ENTRADA : N->numero maximo de la sumatoria
	//SALIDA : sum -> Sumatoria , suc-> Sucesión en cadena 
	
	// Inicializar Variables
	n <- 4
	sum <- 0 
	sucesion <- ""
	
	// Realizar la sumatoria
	
	Para i<-1 Hasta n Hacer
		
		value <- (2 * i) - 1
		//Mostrar value;
		sum <- sum + value
		
		// sucesion =  value1 + value2 + ...
		value_texto = ConvertirATexto(value)
		
		Si (i <> n)
			// value_texto_con_coma = value_texto + "+"
			value_texto_con_coma <- concatenar(value_texto,",")
		SiNo
			// value_texto_con_coma = value_texto 
			value_texto_con_coma <- value_texto
		FinSi
		
		// sucesion = sucesion + value_texto_con_coma
		sucesion <- Concatenar(sucesion,value_texto_con_coma)
		
	FinPara
	
	Mostrar "Sumatoria :", sum
	Mostrar "Sucesion = {",sucesion,"}"
	
FinAlgoritmo
	