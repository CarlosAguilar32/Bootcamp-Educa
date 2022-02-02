"""
CSV Valores separados por comas
Es un formato de archivo simple que se utiliza
para almacenar datos tabulares, como una hoja de
cálculo o una BD
Es un formato muy común para Data Sciencie
"""
import csv
#TODO| Esto me permite abrir el archivo en la variable asignada "data_cargamos"
with open('cargamos.csv') as data_cargamos:
    #TODO| Leer el archivo linea por linea
    csv_leer=csv.reader(data_cargamos)
    #TODO| Conviirtiendo o Cast el archivo a una colección tipo List
    lista_estudiantes=list(csv_leer)
    print(lista_estudiantes)

#TODO| INDICADORES:
#TODO| alumnos por curso:
def cursos_alumnos(estudiantes,curso_param):
    """
    #TODO| Esta función me permite filtrar a los alumnos por curso
    Args:
        ? estudiantes ([type]): "Es una lista donde se almacena la información del curso"
        ? curso_param ([type]): "Es el filtro que se va a aplicar de acuerdo al curso que queremos mostrar"
    """
    estudiantes_curso=[]
    for estudiante, curso in estudiantes:
        if curso==curso_param:
            estudiantes_curso.append((estudiante,curso))
    return estudiantes_curso





