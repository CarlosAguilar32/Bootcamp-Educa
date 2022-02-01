from base_de_datos import empleados

def buscar_empleado(bd):
    existe = False
    cod_emp = input("Ingrese el codigo del empleado: ")
    for item in bd:
        if(cod_emp == item['codigo']):
            print(f"El sueldo del empleado {item['nombre']}"
            + f" {item['apellido']} es de Q{item['sueldo']} " )
            existe=True
            break
    if existe == False:
            print("El empleado no existe")

buscar_empleado(empleados)