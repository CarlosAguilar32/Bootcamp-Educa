"""
Es un conjunto de sentencias que pueden ser invocadas
durante la ejecución del programa
Las ventajas del uso de funciones son:
1. Minimiza el código
2. Aumento de legibilidad
3. Fomenta la reutilización del código
"""

# #Creando la función
# def saludo():
#     print("Hola, esto es una función")

# #Pasando parametros a la función
# def funcion_parametros(a,b):
#     print(f'este es el valor de A: {a} y el valor de B: {b} ')

# def mensaje(nombre,mensaje="Adios"):
#     saludo = mensaje + " " + nombre
#     print(saludo) 

# #Función con valores indefinidos
# def saluda(*nombres):
#     for item in nombres:
#         print(item)

# saluda("python","javascript","flask","css")


def elementos(**params):
    for key in params:
        print (key, params[key])

elementos(ciudad="Tijuana",país="México")

#Invocando a la función
# saludo()
# funcion_parametros(12,34)
# mensaje("Armando")