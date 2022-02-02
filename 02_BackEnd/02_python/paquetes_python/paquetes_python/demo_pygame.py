#debera instalar la libreria 
import pygame
#Se inicializa la librería
pygame.init()
#Mostrar la ventana GUI en posición X,Y en mi pantalla
window=pygame.display.set_mode((500,4000))
while True:
    #Dibujar figura geométrica
    pygame.draw.lines(window,(0,255,255),True,((50,50),(75,75),(63,100),(38,100),(25,75)),3)
    pygame.display.update()
