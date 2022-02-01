"""
Manejo de Colecciones
Listas  []
Diccionarios {}
Tuplas () Inmutable
Set {}
"""
# cargamos = ["Maria","Lourdes","Nicolle","Alicia","Armando"]
# valores =["Maria",20.90,23,True,(12,67,34),[12,45,67]]
# #Metodos Para Listas
# #Recorrer elementos de la Lista
# for item  in cargamos:
#     print(item)
# #Mostrar Un Valor de La Lista
# #print(cargamos[2])
# #print(cargamos[-1])
# #print(cargamos[2:3]) #Rango de Valores
# #Insertar Valores a Lista
# cargamos.append("Jose") # Insertar un valor al Final de la Lista
# print(cargamos)
# cargamos.insert(1,"Alfredo") # Inserta un valor de acuerdo a la posicion indica
# cargamos.pop() #Elimina un elemento de la Lista por su indice
# cargamos.remove("Alicia") #Elimina un elemento de la lista por su valor
# del cargamos[2] #Elimina un eleento de la lista por su posicion
# cargamos[4]="Alfredo" #Modifica un Elemento de la Lista
# cargamos.sort() #Ordenar la lista de forma ascendente
# cargamos.sort(reverse=True) #Ordenar la lista de form descendente
# cargamos.clear() #Eliminar todos los elementos de la listas
# cargamos=list() #Inicialiazar o setear la lista
 

#Realizar un programa que me permita añadir 5 elementos a una lista de cursos
# cursos=[] #Inicializar la Lista
# for item in range(1,5):
#     nuevo_curso=input(f'Ingrese el curso {item}') # Ingreso los nuevos cursos
#     cursos.append(nuevo_curso) #Añadiendo a la Lista
# print("Mostrando los elementos de la Lista")    
# print(cursos) # Mostrando los elementos de la lista   

#Crear un programa que permita llenar una lista de Invitados para la fiesta
#De Armando REQUSITO "Traer Regalo"

msg=""
lista_invitados=[]
while True:
    invitado=input("Ingrese el Nombre del Invitado:")
    regalo=input("¿Ha Traido Regalo?<S/N>:")
    if regalo.upper() == "S":
        lista_invitados.append(invitado)        
    msg=input("Desea agregar otro invitado:<S/N>:")
    if msg.upper()=="N":
        break
print("Lista de Invitados")    
print(f'Lista de Invitados{lista_invitados}')   











