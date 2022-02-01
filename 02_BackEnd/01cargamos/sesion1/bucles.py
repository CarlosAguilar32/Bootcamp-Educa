#for x in range(10):
#    print(x,"Hola Mundo")


#for x in range(1,10,2):
#    print(x)

#i=0
#while i<=100:
#    print(i)
#    i=i+1


contraseña="python"
cont=0
while True:
    con=input("Contraseña:")
    if con==contraseña:
        print("Contraseña correcta")
        break
    else:
        print("Contraseña errada")
        cont +=1
        if cont == 3:
            print("Supero los intentos,vuelva a intentarlo dentro de 24 horas")
            break


