"""
Es un conjunto de sentencias que pueden ser invocadas durante 
la ejucion del programa
Las ventajas de uso de funciones son:
1)Minimize el codigo
2)Aumento de legibilidad
3)Fomentar la reutilizacion del codigo
4)Debe generalmente Retornar un calor return
"""

#Creando la funcion
def saludo():
    print("Hola esto es una funcion")

#Pasando parametros a la funcion
def funcion_parametros(a,b):
    print(f'este es el valor de A{a} y el valor de B{b} ')

#Funcion con valores por defecto
def mensaje(nombre,mensaje="Adios"):
    #saludo = mensaje + " " +nombre
    print(f'saludo {nombre} {mensaje}')

#Funcion on valores indefinidos(listas)
def saluda(*nombres):
    for item in nombres:
        print(item)


def elementos(**params):
    for key in params:
        print(key,params[key])

elementos(ciudad="Tijuana",pais="Mexico")        

#saluda("python","javascrit","flask","django","css","html")

#Invocando a la funcion
#saludo()
#funcion_parametros(12,34)  
#mensaje("Armando")




