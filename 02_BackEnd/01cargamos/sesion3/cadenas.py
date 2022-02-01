una_cadena=" Esta es una cadena de texto "
otro_cadena='Esta es otra cadena de text'
"""
Comentarios
En Lineas
Multiples
"""
#Comentarios en Una Sola Linea

# print(una_cadena[2]) #Imprimir una posicion de la cadena
# print(una_cadena[5])
# print(una_cadena[6:15]) #En Un rango  de caracteres
# print(una_cadena[-5:-2]) #Substraer caracters de derecha a Izquierda
#print(len(una_cadena)) #La Cantidad de Caracteres que tiene la cadena
#print(una_cadena.strip())#Eliminar Espacios en blanco de los extremos de una cadena
#print(una_cadena.lower()) #Todo a Minuscula
#print(una_cadena.upper()) #Todo a Mayuscula
#cadena="PYTHON Es un Lenguaje Interpretado y MUY facil de aprender"
#print(cadena.replace("PYTHON","JAVASCRIPT")) #Reemplaza una cadena de Texto por Otra
cadena="PYTHON ,ES MUY INTERESANTE , LO VOY A MANEJAR"
cadena2=cadena.split(",") #Dividir una cadena en Subcadenas
#print(cadena2[0])
mensaje="python manejas diferentes python funciones de cadena python"
#print(mensaje.capitalize())
print (mensaje.count("python")) #Contabiliza el numero de ocurrencias de una subcadena
habilidades="Los Lenguajes que mas he aprendido son Javascript y PYTHON"
#print(habilidades.find("javascript")) #Busqueda de Cadenas

#Metodos verficiar elementos de una cadena

# Alfanumericos (.isalnum())
# Alfabeticos (.isalpha())
# Numero (.isdigit())
# Letra May (.isupper())
# Letra Min (.islower())
# Espacios (.isspace())
# Numericos (.isnumeric()) 

precio="23"
if precio.isdigit():
    print("La Cadena contiene numeros en su conntenido")
else:
    print("La Cadena no contienes numeros en su contenido")    






