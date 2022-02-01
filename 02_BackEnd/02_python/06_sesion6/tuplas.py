precios = (100,200,300)
valores=1,2,3,4,5,6,7


#print(type(precios))
#print(type(valores))
#TODO Las tuplas son inmutables, no se pueden modificar
#TODO ni insertar ni eliminar
#TODO Son ordenados
#precios[0]=200
#print(precios[0])

print(precios)
print(len(precios))

frutas=("manzanas","fresas","uvas")
buscar=input("Ingrese la fruta que vas a buscar: ")

if buscar in frutas:
    print ("Si se encuentra la fruta")
else:
    print("No se encuentra la fruta")