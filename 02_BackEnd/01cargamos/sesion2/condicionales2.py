"""
Dado el sueldo actual de un empleado
si este es menor a $8000.00 se incrementa un 12%
en caso contrario es el 8%. al final mostrar el aumento
y su nuevo sueldo
"""

# sueldo=float(input("Ingrese el sueldo del trabajador: $"))
# if sueldo <8000:
#     aumento=sueldo*0.12
# else:
#     aumento=sueldo * 0.08
# nuevo_sueldo=sueldo + aumento  
# print(f'El Aumento es ${aumento:.2f} y nuevo sueldo = ${nuevo_sueldo:.2f}')  

"""
CATEGORIA---
RECURSOS HUMANOS =3
CONTABILIDAD = 5
SISTEMAS =2
"""
codigo=input("Ingrese el codigo del empleado:")
categoria=int(input("Ingrese la categoria:"))
antiguedad=int(input("Ingrese la Antiguedad:"))
#Flag = Bandera
respuesta=False
if categoria == 3 or categoria == 5:
    if antiguedad>=5:
        respuesta=True
elif categoria ==2 and antiguedad>=10:
    respuesta=True
if respuesta:
    resultado=" Reune las caracteristicas para el puesto"
else:
    resultado=" No Reunes las caracteristicas para el puesto"
print(f'El Empleado con codigo {codigo}' + resultado)



