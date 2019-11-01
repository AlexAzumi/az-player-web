# Sitio web de az! player
Sitio web dedicado a exponer la aplicación `az! player` al público en general

<img src="https://i.ibb.co/Qv5C3WV/P-gina-web-1-1.png" alt="Sitio web de az! player">

## Correr localmente
El sitio web usa la **API** de ``GitHub`` para obtener la información de la última versión, cosa a tener en cuenta al momento de correr la página localmente.

Primero se necesita clonar el repositorio y entrar a la carpeta generada
```
git clone https://github.com/AlexAzumi/az-player-web.git
cd az-player-web
```
Una vez clonado es necesario instalar las dependencias usando **npm**
```
npm install
```
Por último para correr la página localmente usa el siguiente comando
```
ng serve --open
```
**Nota:** El parámetro `--open` indica que se abra la página en el navegador de preferencia una vez terminada la transpilación
