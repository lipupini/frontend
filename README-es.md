![image](https://user-images.githubusercontent.com/595446/177451446-55fcc030-04ec-4ed7-9a69-d5ccfc0b53d8.png)

# Instalution

Instalution pretende ser una solución revolucionaria para Instagram.

En busca de personas con ideas afines para iniciar una comunidad de desarrollo:

1) Artistas que quieran tomar el control de sus carteras
2) Desarrolladores interesados en aportar código
3) Usuarios con cualquier idea o visión sobre el proyecto

## Requisitos

Actualmente hay cuatro métodos soportados para ponerse en marcha con Instalution. Sólo tienes que elegir un método:

### Método pnpM

- [pnpM](https://pnpm.io/installation)

### Método Docker Compose

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

### Método Dockerfile

- [Docker](https://docs.docker.com/get-docker/)

### Método Vagrant

- [Vagrant](https://vagrantup.com/)
- Método [VirtualBox](https://virtualbox.org/)

## Instalación de Instalution

### Opción 1: Instalar Instalution con pnpM
1) `git clone https://github.com/instalution/frontend.git instalution`.
2) `cd instalution`
3) `pnpm install`
4) `pnpm next telemetry disable`
5) [Descarga un archivo](https://help.instagram.com/181231772500920) de tus datos desde Instagram
6) Extrae el contenido del directorio `media/posts/` del archivo a `./public/accounts/[archive_folder_name]`. El nombre de la carpeta base se convertirá en el nombre de usuario, e Instalution leerá cada imagen y vídeo en cada subcarpeta.
7) `pnpm dev` -- Instaluación debería estar ahora disponible en http://localhost:1234

### Opción 2: Instalar Instalution con Docker Compose
1) `git clone https://github.com/instalution/frontend.git instalution`.
2) `cd instalution`
3) [Descarga un archivo](https://help.instagram.com/181231772500920) de tus datos desde Instagram
4) Extrae el contenido del directorio `media/posts/` del archivo a `./public/accounts/[archive_folder_name]`. El nombre de la carpeta base se convertirá en el nombre de usuario, e Instalution leerá cada imagen y vídeo en cada subcarpeta.
5) `docker-compose up` -- Instalution debería estar ahora disponible en http://localhost:1234

### Opción 3: Instalar Instalution con Dockerfile

1) `git clone https://github.com/instalution/frontend.git instalution`.
2) `cd instalution`
3) [Descarga un archivo](https://help.instagram.com/181231772500920) de tus datos desde Instagram
4) Extrae el contenido del directorio `media/posts/` del archivo a `./public/accounts/[archive_folder_name]`. El nombre de la carpeta base se convertirá en el nombre de usuario, e Instalution leerá cada imagen y vídeo en cada subcarpeta.
5) `docker build --tag=frontend .`
6) `docker run --volume=$(pwd):/home/node/app --publish 1234:1234 frontend` -- Instalution debería estar ahora disponible en http://localhost:1234

### Opción 4: Instalar Instalution con Vagrant
1) `git clone https://github.com/instalution/frontend.git instalution`.
2) `cd instalution`
3) [Descargue un archivo](https://help.instagram.com/181231772500920) de sus datos desde Instagram
4) Extrae el contenido del directorio `media/posts/` del archivo a `./public/accounts/[archive_folder_name]`. El nombre de la carpeta base se convertirá en el nombre de usuario, e Instalution leerá todas las imágenes y vídeos de cada subcarpeta.
5) `vagrant up` -- Instalution debería estar disponible en http://localhost:1234

### Estado

Actualmente Instalution muestra tanto las imágenes como los vídeos del archivo una vez extraídos. Técnicamente no tiene que ser un archivo de Instagram, puedes poner cualquier medio en las carpetas de nombre de usuario.

Si debe haber un frontend con login para gestionar fotos y videos, podría ser un proyecto separado y en la forma más simple todo lo que requeriría es un gestor de archivos fijado a los nombres de usuario en `./public/accounts/[username]`. De hecho, tal vez estos podrían eventualmente corresponder a los nombres de usuario del sistema operativo (por ejemplo, en `/home/` o `C:/Users/` etc).

### Breve lista de necesidades / TODOs

- Añadir la opción de paginación de desplazamiento infinito

- Añadir caché del sistema de archivos para la generación de miniaturas

*Note that at this time all translations are directly via DeepL Machine Translation. Please help!*
