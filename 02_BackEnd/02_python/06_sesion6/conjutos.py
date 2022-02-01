frutas={"manzanas","fresas","cerezas"}

print(type(frutas))
print(frutas)

#TODO Adcionar elementos al set
frutas.add("platano")
print (frutas)

#Todo adicionar multiples elementos al set
frutas.update(["naranja","sandía","coco"])
print (frutas)

#Todo remover elementos al set
frutas.remove("coco")
print (frutas)

#Todo tratar de modificar un valor del set
#frutas[0]="maracuya" #!esto no está permitido

frutas.add("fresas")#!No permite elementos duplicados
print(frutas)

