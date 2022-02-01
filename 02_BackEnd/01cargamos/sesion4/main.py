#from = desde el archivo 
#import = importame * todas las librerias
from calculadora import *

# print(suma(12,5))
# print(resta(4,2))
# print(multiplicar(5,2))
# print(dividir(2,2))

while True:
    a = float(input("Ingrese el primer numero a:"))
    b = float(input("Ingrese el segundo numero b:"))
    menu="Ingresa la operación: \n 1) Suma \n 2) Resta \n 3) Mult \n 4) Div \n 5) Salir \n"
    opcion=input(menu)
    if opcion == "1":
        print(suma(a,b))
    elif opcion =="2":
        print(resta(a,b))
    elif opcion =="3":
        print(multiplicar(a,b))
    elif opcion =="4":
        print(dividir(a,b))
    elif opcion =="5":
        print("Adios!")
        break
    else:
        print("La Operacion ingresada no es valida")            



