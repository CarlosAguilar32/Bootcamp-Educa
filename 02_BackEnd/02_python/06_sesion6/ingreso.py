"""
Para ingresar a ver el partido entre Perú y Ecuador
Se tiene que cumplir los siguientes requisitos:
1. Que el hincha sea mayor de edad
2. que tenga las 3 dosis de vacunas
si cumple con esas condiciones se le asignará un asiento
ojo que no se le puede asignar un asiento repetido
al final mostrar los numeros de asientos y personas
que lo ocupan
"""
hinchas=[
    {'dni':'1021092','nombre':'Armando','nac':2002,'dosis':3,'asiento':''},
    {'dni':'1021093','nombre':'Diego','nac':1985,'dosis':'2','asiento':''},
    {'dni':'1021094','nombre':'Gilberto','nac':2000,'dosis':'1','asiento':''}
]

# encontrar = False
resp=""
año_actual = 2022
while resp != "N":
    dni = input("Ingresar el DNI: ")
    for item in hinchas:
        if (dni in item['dni']):
            # encontrar = True
            edad = año_actual - item['nac']
            if edad>=18 and 3 == item['dosis']:
                asiento = input("Asignar numero de asiento: ")
                item['asiento']=asiento
                print(f'se le asigno el asiento {asiento} al hincha')
                print(hinchas)
            else:
                print ("El hincha NO cumple alguna de las condiciones")
            resp=input("Desea continuar <S/N>: ")
            if resp == "N" :break
print(hinchas)

