Funcion r <- suma(n1,n2)
	r <- n1 + n2
FinFuncion

Funcion r <- resta(n1,n2)
	r <- n1 - n2
FinFuncion

Funcion r <- multiplicacion(n1,n2)
	r <- n1 * n2
FinFuncion

Funcion r <- division(n1,n2)
	r <- n1 / n2
FinFuncion

Proceso calculadora
	Mostrar 'Ingrese dos numeros'
	leer a, b
	Mostrar ''
	Mostrar '�Qu� desea hacer?'
	Escribir '1. Suma'
	Escribir '2. Resta'
	Escribir '3. Multiplicaci�n'
	Escribir '4. Divisi�n'
	leer x
	Mostrar ''
	Seg�n x hacer
		1: 
		Escribir 'Resultado de suma: ',suma(a,b)
		2:
		Escribir 'Resultado de resta: ',resta(a,b)
		3:
		Escribir 'Resultado de multiplicacion: ',multiplicacion(a,b)
		4:
		Escribir 'Resultado de division: ',division(a,b)
Finsegun
si x >= 5
	Mostrar 'La base de datos no acepta la instrucci�n No. ',x
FinSi
FinProceso


	