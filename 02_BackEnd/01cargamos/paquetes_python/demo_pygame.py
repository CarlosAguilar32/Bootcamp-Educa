#debera instalar la libreria pip install pygame
import pygame
#se inicializa la libreria
pygame.init()
#Mostrar la ventana GUI en posicion X,Y de mi pantalla
window=pygame.display.set_mode((500,400))
while True:
    #Dibujar figuras geometricas
    pygame.draw.lines(window,(0,255,255),True,((50,50),(75,75),(63,100),(38,100),(25,75)),3)
    pygame.display.update()

