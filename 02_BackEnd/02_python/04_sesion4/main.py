from calculadora import * # * todas las librerías
#from calculadora import suma 


# print(suma(12,5))
# print(resta(4,2))
# print(multiplicar(5,2))
# print(dividir(2,2))

while True:
    a = float(input("ingrese el primer numero a: "))
    b = float(input("ingrese el segundo numero b: "))
    menu = "Ingrese la operación: \n 1) Suma \n 2) Resta \n 3) Multiplicar \n 4) Dividir \n 5) Salir \n"
    opcion=input(menu)
    if opcion == "1":
        print(suma(a,b))
    elif opcion == "2":
        print(resta(a,b))
    elif opcion == "3":
        print(multiplicar(a,b))
    elif opcion == "4":
        print(dividir(a,b))
    elif opcion == "5":
        print("Adios")
        break
    else:
        print("La operación ingresada no es válida")


