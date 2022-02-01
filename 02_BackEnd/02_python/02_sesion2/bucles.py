# contador=0
# acumulador=0
# for x in range(1,6):
#     sueldo=float(input(f'Ingrese Sueldo {x} :'))
#     contador = contador + 1 
#     acumulador = acumulador + sueldo
#     promedio_sueldo = acumulador / contador
# print(f'Cantidad de empleadors Procesados {contador}')
# print(f'El Total de la Planilla {acumulador}')
# print(f'El Promedio de Sueldo es {promedio_sueldo}')
# print("Fin del Bucle")

#Break es salir del Buvle
#Continue es seguir con el bucle

# for i in range(1,10):
#     if i==5:
#         break
#     else:
#         print(i)
#         continue
        
# i = 0
# suma = 0
# while i <= 100:
#     print(i)
#     suma=suma+i
#     i=i+1
# print(f'La suma de los números es {suma}')

#Escribir un porgrama que nos solicite la contraseña para ingresar al sistema
#Si la contraseña es errado deberá a volver a intentarlo

# contador=0
# usuario=input("ingrese el nombre de usuario: ")
# contraseña="python"
# while True:
#     con=input("Ingrese la Contraseña: ")
#     if con==contraseña:
#         print(f'Bienvenido al Sistema {usuario}' )
#         break #True
#     else: 
#         contador=contador+1
#         print (f'La contraseña es errada, vuelva a intentarlo {contador}')
        
#         if contador == 3:
#             print("Superó los intentos, se bloqueará el acceso")
#             break


# import random
# numero_secreto = random.randint(1,100)
# # print(numero_secreto)
# intentos = 0
# while True:
#     numero=int(input("¿Cual es el numero secreto? "))
#     intentos = intentos + 1
#     if numero == numero_secreto:
#         print("Acertaste!!!")
#         print(f'Numero de Intentos {intentos}')
#         break
#     else:
#         if numero_secreto > numero:
#             print(f'El numero secreto es mayor que {numero}')
#         else:
#             print(f'El numero secreto es menor que {numero}')

'''
Escribe un programa que solicite ingresar 10 notas de alumnos
y nos informe cuantos tienen notas mayores o iguales a 17 y cuantos menores
utilizar while
'''

notas = 0
i = 1
notas_mayores = 0
sumatoria_mayor = 0
notas_menores = 0
sumatoria_menor = 0
while True:
    notas=int(input(f'Ingrese la nota del alumno {i}: '))
    if notas >= 17:
        notas_mayores=notas_mayores+1
        sumatoria_mayor = sumatoria_mayor + notas 
    else:
        notas_menores=notas_menores+1
        sumatoria_menor = sumatoria_menor + notas 
    i=i+1
    if i > 10:
        break 

print(f'Cantidad de alumnos {i}')
print("")
print(f'Alumnos con notas mayores o iguales a 17: {notas_mayores}')
print(f'Promedio de alumnos con notas mayores o iguales a 17: {(sumatoria_mayor / notas_mayores):.2f}')
print("")
print(f'Alumnos con notas menores a 17: {notas_menores}')
print(f'Promedio de alumnos con notas menores a 17: {(sumatoria_menor / notas_menores):.2f}')
print("")
print(f'Promedio total de la clase {((sumatoria_mayor + sumatoria_menor) / i):.2f}') 

