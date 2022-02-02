try:
    #TODO el cuerpo del programa
    suma = 20 + "15"
except Exception as error: #!la oalabra reservada exepcion nos devuelve el error del interprete
    #! Cuando el programa encuentre un error entrará a este bloque
    print(f'Ha ocurrido una excepcion {error}')
else:
    #? Cuando no ocurra ningún error
    print("No ha ocurrido ninguna excepción")
finally:
    #TODO siempre se va a ejecutar
    print("Se terminó el bloque de código")