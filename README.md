# Pasos para correr este proyecto:
Para descargar el proyecto:
```
git clone https://github.com/camilomontoyau/andres-camilo-arcila.git

cd andres-camilo-arcila
```
## Montaje de la base de datos:
Estando en la carpeta raíz de este proyecto, usar los siguientes comandos
```
psql -U <username> -c "create database <databaseName>;"

psql -h <host> -d <databaseName> -U <username> -f star-wars.sql
```
donde `<username>` es el usuario de postgres, `<host>` la dirección ip del host y `<databaseName>` es el nombre que se le desea dar a la base de datos.
## Correr el servicio back-end:
Estando en la carpeta `./BackEndService` de este proyecto, crear un archivo con el nombre `config.js` y editarlo con el siguiente contenido
```
export var databaseConfig = {
    PASSWORD: '<password>',
    USER: '<username>',
    HOST: '<host>',
    PORT: '<port>',
    DATABASE: '<databaseName>'
}
```
donde `<username>` es el usuario de postgres, `<password>` es la contraseña del usuario, `<host>` la dirección ip del host, `<port>` el puerto 
de la base de datos (5432 por defecto) y `<databaseName>` es el nombre que se le dió a la base de datos.

En este punto, para iniciar el servicio se deben usar los siguientes comandos estando en la carpeta `./BackEndService`:
```
yarn install

yarn start
```
## Correr el servicio front-end:
Estando en la carpeta `./FrontEndService` se deben usar los siguientes comandos
```
yarn install

yarn start
```
