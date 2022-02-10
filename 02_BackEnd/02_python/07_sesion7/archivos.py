import csv

def data_alumnos_csv():
    with open('02_BackEnd/02_python/07_sesion7/cargamos.csv','r') as data_cargamos:
        csv_leer=csv.reader(data_cargamos, delimiter=";")
        lista_estudiantes=list(csv_leer)
        return lista_estudiantes

def data_alumnos_csv():
    with open('02_BackEnd/02_python/07_sesion7/valores.csv','r') as data_cargamos:
        csv_leer=csv.reader(data_cargamos, delimiter=";")
        lista_estudiantes=list(csv_leer)
        return lista_estudiantes


# print(data_alumnos_csv())
def cursos_alumnos(estudiantes,curso_param):
    estudiantes_curso=[]
    for CODIGO,NOMBRE,APELLIDOS,CURSO,P1,P2,P3,PRO in estudiantes:
        if CURSO==curso_param:
            estudiantes_curso.append((NOMBRE,CURSO))
    return estudiantes_curso


#curso=input("Ingrese el curso a mostrar sus estudiantes: ")
#print(cursos_alumnos(data_alumnos_csv(),curso))

def nota_mayor_curso(estudiantes):
    nota_mayor=20
    for CODIGO,NOMBRE,APELLIDOS,CURSO,P1,P2,P3,PRO in estudiantes:
        # print(type(float(PRO)))
        # print(type(nota_mayor))
        
        if PRO<=nota_mayor:
            nota_mayor=PRO 
        return nota_mayor
print(nota_mayor_curso(data_alumnos_csv()))

#? Crear el indicador que ,e visualize el nombre y el apellido del alumno 
#? Que saco la nota más alta del curso

