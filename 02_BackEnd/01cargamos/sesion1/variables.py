
"""
esto es un comentario en
varias lineas
"""

#Reglas Para definir Variables
#snake_case


# Tipo de Datos
edad_persona=28 # tipo int
nombre="Armando" # tipo str
precio=28.8 # tipo float
estado=True # tipo bool

"""
print(type(edad_persona)) #int
print(type(nombre)) # str
print(type(precio)) # float
print(type(estado)) #bool
"""

#Colecciones
lista_cursos=["PYTHON","FLASK","DJANGO"] #list
sueldo=(1900,1700,1850) #tuple #inmutables 
empleados={'codigo':'a100','codigo':'a200'} #dict
#print(type(lista_cursos))
#print(type(sueldo))
#print(type(empleados))


#Palabras Reservadas
#import keyword
#print(keyword.kwlist)


#Conversion de datos
valor="234"
valor2=100
valor3=345.78

#print(type(int(valor)))
#print(type(float(valor2)))
#print(type(str(valor3)))

#Ejercicios Practicos
#Calcular el Peso de un Objeto

masa= 75
gravedad = 9.81
peso = masa * gravedad
#print(peso)


#Promedio de Notas
#Funcion Input .- permitir ingresar valores por consola
#nom_alum=input("Ingrese el nombre de un alumno:")
#nota_uno=float(input("Ingrese Nota1:"))
#nota_dos=float(input("Ingrese Nota2:"))
#promedio = (nota_uno+nota_dos) / 2
#Concatenacion
#print("El promedio es"+str(promedio))
#print("El promedio es",promedio)
#print("El promedio del alumno {} es {}".format(nom_alum,promedio))


#Operadores Matematicos
#print(2 + 2) # 4
#print(4 * 8) # 32
#operacion=5 / 3 # 1.66666
#print( 5 // 3) # 1
#print( 23 % 2) # 1

#print("El Valor Formateado es %.4f" %operacion) #1.6667


# Operadores Logicos
# " >Mayor "
# "< Menor "
# " >= Mayor Igual "
# " <= Menor Igual 
# " != Diferente "
# " == " Igual
# " and " y
# " or "  o
# " not" negacion

# print(3>2  and  4>3) #True
# print(3>2  and  4<3) #Fals
# print(3<2  and  4<3) #False
# print(3>2  or  4>3) # true 
# print(3>2  or  4<3)  # true
# print(3<2  or  4<3)  #Falso 
# print(not  3>2 )  #Falso    
# print(not  True ) #Falso     
# print(not  False ) # True     
# print(not  not  False )  #False
# print(not 1 + 2 != 3) #True
# x = (len("jugar") > 5) and (len("jugar") < 10) #False


#Ejercio Format

#pago_hora= 60.00
#nom_emp=input("Ingrese el Nombre del empleado:")
#horas_trab=int(input("Ingrese las Horas Trabajadas:"))
#pago_jornal=horas_trab*pago_hora
#print("{} Recibira el Monto {} Felicitaciones {}".format(nom_emp,pago_jornal,horas_trab))


#pizza=int(input("Hola, ¿Cuantas rebanadas de pizza trajistes..?"))
#comidas=int(input("¿Y cuanteas rebanadas se comieron...?"))
#print(f'Si Trajiste {pizza} rebanadas de pizza y se comieron {comidas}, quedan {pizza - comidas} Rebanadas')

#Separadores y Tabuladores y saltos de Linea
#print("hola","mundo",sep='<->')
#print("hola",end="")
#print("mundo")

print("saltos de linea. viene un salto \n\n")
print("\t tabulador \n\n")
print("comillas .Comillas dentro :\"Hola\" ")



















