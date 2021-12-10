
Algoritmo cacular_raices_complejas
	
	// Lectura de datos (A,B,C)
	// Calcular el discriminante D
	// Control de flujo -> solucion real D >0
	// Control de flujo -> solucion real unica D = 0
	// Control de flujo -> raices complejas D < 0
	
	// ENTRADA : A, B y C
	
	// Inicializacion
	A <- 0
	B <- 0
	C <- 0
	D <- 0 // determinante
	
	Escribir "Ingrese los coeficientes para A,B y C"
	Leer A,B,C
	
	//Calcular Determinante
	D <- B^2 - 4*a*c
	
	
	
	Si (D >= 0) Entonces
		// DD => Raiz del discriminante
		Si (D = 0) Entonces
			//  solucion unica D = 0
			x <- -B / (2*A)
			Escribir "La raiz unica(X) es :",x
			
		SiNo
			//  solucion real D >0
			DD <- RAIZ(D)
			x1 <- (-B + DD)/(2*A)
			x2 <- (-B - DD)/(2*A)
			Escribir "Las raices son reales"
			Escribir "La raiz de X1 es :",x1
			Escribir "La raiz de X2 es :",x2
		FinSi
		
	SiNo
		// (D < 0)
		//  raices complejas D < 0
		// Tranformar valor negativo a positivo
		D <- ABS(D)
		parte_real <- -B /(2*A)
		parte_imag <- RAIZ (D) / (2*A)
		
		Escribir "La raiz comp. para x1=", parte_real,"+",parte_imag,"i"
		Escribir "La raiz comp. para x2=", parte_real,"-",parte_imag,"i"
		
	FinSi
	
	
FinAlgoritmo

