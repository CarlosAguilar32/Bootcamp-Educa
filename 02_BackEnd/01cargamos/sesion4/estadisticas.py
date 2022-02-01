from base_de_datos import empleados
"""
Indicadores
1)Buscar a un empleado por codigo y mostrar el sueldo que gana 
2)Realizar un indicador que me permitar sumar el sueldo de toda
un Area
"""

def buscar_empleado(bd):
    existe=False
    cod_emp=input("Ingrese el codigo del empleado:")
    for item in bd:
        if cod_emp ==  item['codigo']:
            print(f"El Sueldo del empleado {item['nombre']} "
             + f"{item['apellido']} es {item['sueldo']}")
            existe=True
            break
    if existe == False:
        print("El Empleado no existe")

def suma_sueldos_area(bd):
    existe=False
    suma=0
    try:
        area_buscar=input("Ingrese el Area a totalizar el sueldo:")
        for item in bd:
            if area_buscar == item['area']:
                #Acumulando el sueldo del area
                suma=suma+item["sueldo"]
                existe=True
        #Se va a ejecutar cuando el area no exista    
        if existe == False:
            print("El Area no existe")
        #Totalizar los sueldos por area     
        print(f'El Total de la planilla del Area {area_buscar} es {suma}')
    except:
        print("Ha ocurrido un error vuelva a intentarlo")


suma_sueldos_area(empleados)




