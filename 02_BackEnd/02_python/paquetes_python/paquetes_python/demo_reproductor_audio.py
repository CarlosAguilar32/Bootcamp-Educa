#Instalar la librería
#https://pypi.org/project/gTTS/

#Del módulo prinicipal utilizar la función gTTS
from gtts import gTTS
import os
# El texto que voy a reproducir a audio
mytexto="Python es muy amigable"
#Cambiando el Lenguaje
lenguaje="es"
convertir=gTTS(text=mytexto, lang=lenguaje, slow=False)
#Salvar la conversión del texto a un audio
convertir.save("cargamos.mp3")
os.system("start cargamos.mp3")
