# # numeros aleatorios

# import random
# cargamos=['Alicia','Carlos','Javier','María','Ana','Nicolle']

#? Eligiendo un amigo al azar
# print(random.choice(cargamos))

#? Mostrar un número aleatorio
# print(random.randrange(100)) #Numero al azar que no pase de 100

# #TRABAJANDO CON FECHAS
# from datetime import date, datetime
#TODO| me devuelve la fecha del sistema
# hoy = date.today()
# print(hoy)

#TODO| me devuelve la fecha y la hora del sistema
# fecha_hora=datetime.now()
# print(fecha_hora)

#TODO| me decuelve el mes el día y el año de una fecha establecida
# print(f'Día: {hoy.day}')
# print(f'Mes: {hoy.month}')
# print(f'Año: {hoy.year}')

#TODO| me devuelve la hora, minutos y segundos
# print(f'Hora: {fecha_hora.hour}')
# print(f'Minutos: {fecha_hora.minute}')
# print(f'Segundos: {fecha_hora.second}')


#TODO| Librería matemática
# import math
# print(math.pi)
# print(math.sqrt(4))
# print(math.cos(math.pi/4))

#TODO| Librería estadísticas
import statistics
notas=[19,17,20,17,20,14,19,20]

#? el promedio de las notas
print(statistics.mean(notas))
#? la moda de notas
print(statistics.mode(notas))
#? El valor medio de los datos
print(statistics.median(notas))

