sueldos = {
     "emp001":1200,
     "emp002":1800,
     "emp003":1900
    }

#print(sueldos)
#print(sueldos["emp001"])
#Actualizar el Valor del diccionario
#sueldos["emp002"]=2800
#sueldos.update({"emp002":3800})
#Eliminar un elemento del diccionario
#del sueldos["emp003"]
#Insertar elementos al diccionario
#sueldos["emp004"]=7600
#print(sueldos)

#Crud =
#Create = Create
#Read = Leer
#Update= Actualizar
#Delete = Eliminar
#Recorrer el Diccionario
#for item in sueldos.keys():
#    print(item)

"""
Realizar un programa que simule la consulta de un cajero
Banco , para esto debo tener un origen de datos con 5
Clientes el cajero debera solicitar numero de cuenta 
Y Le mostrara su saldo
"""

clientes=[
   {'cuenta':'2334455','apellido':'Ruiz','nombre':'Armando','saldo':7000},
   {'cuenta':'2334456','apellido':'Gomez','nombre':'Pedro','saldo':8800},
   {'cuenta':'2334457','apellido':'Cespedes','nombre':'Javier','saldo':9000},
   {'cuenta':'2334458','apellido':'Linares','nombre':'Oscar','saldo':12000},
   {'cuenta':'2334459','apellido':'Palomino','nombre':'Maria','saldo':170000}
]
cuenta=input("Ingrese su numero de cuenta a consultar:")
for item in clientes:
    if (cuenta==item['cuenta']):
        print('{} tu  saldo actual es {}'.format(item['apellido'],item['saldo']))
        break












