dvd_precios =[
    {'genero':'SALSA','precio':56.00},
    {'genero':'ROCK','precio':63.00},
    {'genero':'POP','precio':87.00},
    {'genero':'FOLCLORE','precio':120.50},
]
obsequio=False
encontrar=False

genero = input("Ingrese el Género da comprar: ")
for item in dvd_precios:
    if (genero in item['genero']):
        cant_dvd = int(input("Ingrese la cantidad de DVD a comprar: "))
        encontrar=True
        if cant_dvd>=1 and cant_dvd<=3:
            descuento=0
        elif cant_dvd==4:
            descuento = 0.60
        elif cant_dvd>5 and cant_dvd<=10:
            descuento = 0.80
        else:
            descuento=10.2

        if genero.upper()=="POP" or genero.upper()=="ROCK" and cant_dvd>6:obsequio=True

        importe = item['precio'] * cant_dvd
        descuento_total = importe * descuento
        importe_pagar = importe - descuento
        print(f'El Total a pagar Q{importe_pagar} Tiene Poster {obsequio}')
        break
if encontrar==False:
    print("El genero no esta disponible")

