![image](https://user-images.githubusercontent.com/595446/177451446-55fcc030-04ec-4ed7-9a69-d5ccfc0b53d8.png)

# Instalution

Instalution hat sich zum Ziel gesetzt, eine revolutionäre Lösung für Instagram zu sein.

Wir sind auf der Suche nach Gleichgesinnten, um eine Entwicklungsgemeinschaft zu gründen:

1) Künstler, die die Kontrolle über ihre Portfolios übernehmen möchten
2) Entwickler, die daran interessiert sind, Code beizusteuern
3) Nutzer mit Ideen oder Einblicken in das Projekt

Sie sind eingeladen, sich einer der Gruppen anzuschließen:

- Matrix @ #instalution:catgirl.cloud
- [WhatsApp](https://chat.whatsapp.com/KI5jhmO2jo43vMXyo8c1iF)
- [Telegram](https://t.me/instalution)

## Anforderungen

Es gibt derzeit vier unterstützte Methoden, um mit Instalution loszulegen. Sie müssen sich nur für eine Methode entscheiden:

### pnpM-Methode

- [pnpM](https://pnpm.io/installation)

### Docker Compose Methode

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

### Dockerfile-Methode

- [Docker](https://docs.docker.com/get-docker/)

### Vagrant Methode

- [Vagrant](https://vagrantup.com/)
- [VirtualBox](https://virtualbox.org/)

## Installation von Instalution

### Option 1: Installation von Instalution mit pnpM
1) `git clone https://github.com/instalution/frontend.git instalution`.
2) `cd instalution`
3) `pnpm install`
4) `pnpm next telemetry disable`
5) [Lade ein Archiv](https://help.instagram.com/181231772500920) deiner Daten von Instagram herunter
6) Entpacken Sie den Inhalt des Verzeichnisses `media/posts/` im Archiv nach `./public/accounts/[archive_folder_name]`. Der Name des Basisordners wird zum Benutzernamen, und Instalution liest alle Bilder und Videos in jedem Unterordner.
7) `pnpm dev` -- Instalution sollte nun unter http://localhost:1234 verfügbar sein.

### Option 2: Installation von Instalution mit Docker Compose
1) `git clone https://github.com/instalution/frontend.git instalution`.
2) `cd instalution`
3) [Laden Sie ein Archiv](https://help.instagram.com/181231772500920) mit Ihren Daten von Instagram herunter
4) Entpacken Sie den Inhalt des Verzeichnisses `media/posts/` im Archiv nach `./public/accounts/[archive_folder_name]`. Der Name des Basisordners wird zum Benutzernamen, und Instalution liest alle Bilder und Videos in jedem Unterordner aus.
5) `docker-compose up` -- Instalution sollte nun unter http://localhost:1234 verfügbar sein.

### Option 3: Installation von Instalution mit Dockerfile

1) `git clone https://github.com/instalution/frontend.git instalution`.
2) `cd instalution`
3) [Laden Sie ein Archiv](https://help.instagram.com/181231772500920) mit Ihren Daten von Instagram herunter
4) Entpacken Sie den Inhalt des Verzeichnisses `media/posts/` im Archiv nach `./public/accounts/[archive_folder_name]`. Der Name des Basisordners wird zum Benutzernamen, und Instalution liest alle Bilder und Videos in jedem Unterordner.
5) `docker build --tag=frontend .`
6) `docker run --volume=$(pwd):/home/node/app --publish 1234:1234 frontend` -- Instalution sollte nun unter http://localhost:1234 verfügbar sein.

### Option 4: Installation von Instalution mit Vagrant
1) `git clone https://github.com/instalution/frontend.git instalution`.
2) `cd instalution`
3) [Laden Sie ein Archiv](https://help.instagram.com/181231772500920) mit Ihren Daten von Instagram herunter
4) Entpacken Sie den Inhalt des Verzeichnisses `media/posts/` des Archivs nach `./public/accounts/[archive_folder_name]`. Der Name des Basisordners wird zum Benutzernamen, und Instalution liest alle Bilder und Videos in jedem Unterordner.
5) `vagrant up` -- Instalution sollte unter http://localhost:1234 verfügbar sein.

### Status

Instalution zeigt derzeit sowohl Bilder als auch Videos aus dem Archiv an, sobald es extrahiert wurde. Technisch gesehen muss es kein Instagram-Archiv sein, man kann jedes beliebige Medium in den Benutzernamen-Ordnern ablegen.

Eine Demo ist wahrscheinlich unter [instalution.tclv.me/owallowallo](https://instalution.tclv.me/owallowallo) verfügbar.

Hoffentlich bald mehr :)

Wenn es ein Frontend mit Login geben sollte, um Fotos und Videos zu verwalten, könnte es ein separates Projekt sein und in der einfachsten Form würde es nur einen Dateimanager benötigen, der an Benutzernamen unter `./public/accounts/[username]` gebunden ist. In der Tat könnten diese vielleicht optional mit OS-Benutzernamen korrespondieren (z.B. in `/home/` oder `C:/Users/` usw.).

### Kurze Liste von Bedürfnissen / TODOs

- Unendliches Scrollen als Option hinzufügen

- Dateisystem-Cache für Thumbnail-Generierung hinzufügen

*Note that at this time all translations are directly via DeepL Machine Translation. Please help!*
