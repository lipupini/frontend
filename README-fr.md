![image](https://user-images.githubusercontent.com/595446/177451446-55fcc030-04ec-4ed7-9a69-d5ccfc0b53d8.png)

# Instalution

Instalution se veut une solution révolutionnaire pour Instagram.

A la recherche de personnes partageant les mêmes idées pour démarrer une communauté de développement :

1) des artistes qui souhaitent prendre le contrôle de leur portfolio
2) Développeurs intéressés à contribuer au code
3) Utilisateurs ayant des idées ou des points de vue sur le projet.

Vous êtes invité à vous joindre à l'un de ces groupes :

- Matrix @ #instalution:catgirl.cloud
- [WhatsApp](https://chat.whatsapp.com/KI5jhmO2jo43vMXyo8c1iF)
- [Telegram](https://t.me/instalution)

## Exigences

Il y a actuellement quatre méthodes pour démarrer avec Instalution. Vous ne devez choisir qu'une seule méthode :

### Méthode pnpM

- [pnpM](https://pnpm.io/installation)

### Méthode Docker Compose

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

### Méthode Dockerfile

- [Docker](https://docs.docker.com/get-docker/)

### Méthode Vagrant

- [Vagrant](https://vagrantup.com/)
- Méthode d'installation [VirtualBox](https://virtualbox.org/)

## Installation d'Instalution

### Option 1 : Installer Instalution avec pnpM
1) `git clone https://github.com/instalution/frontend.git instalution`.
2) `cd instalution`
3) `pnpm install`
4) `pnpm next telemetry disable` (en anglais)
5) [Téléchargez une archive](https://help.instagram.com/181231772500920) de vos données depuis Instagram
6) Extrayez le contenu du répertoire `media/posts/` dans l'archive vers `./public/accounts/[archive_folder_name]`. Le nom du dossier de base deviendra le nom d'utilisateur, et Instalution lira chaque image et vidéo dans chaque sous-dossier.
7) `pnpm dev` -- Instalution devrait maintenant être disponible à l'adresse http://localhost:1234.

### Option 2 : Installer Instalution avec Docker Compose
1) `git clone https://github.com/instalution/frontend.git instalution`.
2) `cd instalution`
3) [Téléchargez une archive](https://help.instagram.com/181231772500920) de vos données depuis Instagram
4) Extrayez le contenu du répertoire `media/posts/` dans l'archive vers `./public/accounts/[archive_folder_name]`. Le nom du dossier de base deviendra le nom d'utilisateur, et Instalution lira chaque image et vidéo dans chaque sous-dossier.
5) `docker-compose up` -- Instalution devrait maintenant être disponible à l'adresse http://localhost:1234.

### Option 3 : Installer Instalution avec Dockerfile

1) `git clone https://github.com/instalution/frontend.git instalution`.
2) `cd instalution`
3) [Télécharger une archive](https://help.instagram.com/181231772500920) de vos données depuis Instagram
4) Extrayez le contenu du répertoire `media/posts/` dans l'archive vers `./public/accounts/[archive_folder_name]`. Le nom du dossier de base deviendra le nom d'utilisateur, et Instalution lira chaque image et vidéo dans chaque sous-dossier.
5) `docker build --tag=frontend .`
6) `docker run --volume=$(pwd):/home/node/app --publish 1234:1234 frontend` -- Instalution devrait maintenant être disponible à l'adresse http://localhost:1234.

### Option 4 : Installer Instalution avec Vagrant
1) `git clone https://github.com/instalution/frontend.git instalution`.
2) `cd instalution`
3) [Télécharger une archive](https://help.instagram.com/181231772500920) de vos données depuis Instagram
4) Extrayez le contenu du répertoire `media/posts/` dans l'archive vers `./public/accounts/[archive_folder_name]`. Le nom du dossier de base deviendra le nom d'utilisateur, et Instalution lira chaque image et vidéo dans chaque sous-dossier.
5) `vagrant up` -- Instalution devrait être disponible à l'adresse http://localhost:1234.

### Statut

Instalution affiche actuellement les images et les vidéos de l'archive une fois extraites. Techniquement, il n'est pas nécessaire que ce soit une archive Instagram, vous pouvez mettre n'importe quel média dans les dossiers username.

Une démo est probablement disponible à l'adresse [instalution.tclv.me/owallowallo] (https://instalution.tclv.me/owallowallo).

Nous espérons en avoir plus bientôt :)

S'il devait y avoir un frontend avec login pour gérer les photos et les vidéos, cela pourrait être un projet séparé et à la forme la plus simple, tout ce dont il aurait besoin est un gestionnaire de fichiers fixé aux noms d'utilisateurs à `./public/accounts/[username]`. En fait, peut-être que ceux-ci pourraient éventuellement correspondre aux noms d'utilisateurs du système d'exploitation (par exemple dans `/home/` ou `C:/Users/` etc).

#### Courte liste de besoins / TODOs

- Ajouter l'option de pagination par défilement infini

- Ajouter le cache du système de fichiers pour la génération des vignettes

*Note that at this time all translations are directly via DeepL Machine Translation. Please help!*
