# Instalution

Instalution aims to be a revolutionary solution to Instagram.

In search of like-minded individuals to start a development community:

1) Artists who would like to take control of their portfolios
2) Developers interested in contributing code
3) Users with any ideas or insights on the project

Come join the Telegram group: [https://t.me/instalution](https://t.me/instalution)

## Requirements

There are currently four supported methods for getting up and running with Instalution. You only need to pick one method:

### Yarn Method

- [Yarn](https://yarnpkg.com/)

### Docker Compose Method

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

### Dockerfile Method

- [Docker](https://docs.docker.com/get-docker/)

### Vagrant Method

- [Vagrant](https://vagrantup.com/)
- [VirtualBox](https://virtualbox.org/)

## Installing Instalution

### Option 1: Installing Instalution with Yarn
1) `git clone https://github.com/groovenectar/instalution.git`
2) `cd instalution`
3) `yarn`
4) `yarn next telemetry disable`
5) [Download an archive](https://help.instagram.com/181231772500920) of your data from Instagram
6) Extract the contents of the `media/posts/` directory in the archive to `./public/accounts/[archive_folder_name]`. The base folder name will become the username, and Instalution will read every image and video in every subfolder.
7) `yarn dev` -- Instalution should now be available at http://localhost:1234
8) [Delete your Instagram account](https://help.instagram.com/139886812848894/)

### Option 2: Installing Instalution with Docker Compose
1) `git clone https://github.com/groovenectar/instalution.git`
2) `cd instalution`
3) [Download an archive](https://help.instagram.com/181231772500920) of your data from Instagram
4) Extract the contents of the `media/posts/` directory in the archive to `./public/accounts/[archive_folder_name]`. The base folder name will become the username, and Instalution will read every image and video in every subfolder.
5) `docker-compose up` -- Instalution should now be available at http://localhost:1234
6) [Delete your Instagram account](https://help.instagram.com/139886812848894/)

### Option 3: Installing Instalution with Dockerfile

1) `git clone https://github.com/groovenectar/instalution.git`
2) `cd instalution`
3) [Download an archive](https://help.instagram.com/181231772500920) of your data from Instagram
4) Extract the contents of the `media/posts/` directory in the archive to `./public/accounts/[archive_folder_name]`. The base folder name will become the username, and Instalution will read every image and video in every subfolder.
5) `docker build --tag=instalution .`
6) `docker run --volume=$(pwd):/home/node/app --publish 1234:1234 instalution` -- Instalution should now be available at http://localhost:1234
7) [Delete your Instagram account](https://help.instagram.com/139886812848894/)

### Option 4: Installing Instalution with Vagrant
1) `git clone https://github.com/groovenectar/instalution.git`
2) `cd instalution`
3) [Download an archive](https://help.instagram.com/181231772500920) of your data from Instagram
4) Extract the contents of the `media/posts/` directory in the archive to `./public/accounts/[archive_folder_name]`. The base folder name will become the username, and Instalution will read every image and video in every subfolder.
5) `vagrant up` -- Instalution should be solidly available at http://localhost:1234
6) [Delete your Instagram account](https://help.instagram.com/139886812848894/)

### Status

Instalution currently displays both images and video from the archive once extracted. It technically doesn't have to be an Instagram archive, you can put any media in the username folders.

A demo is probably available at [instalution.tclv.me/owallowallo](https://instalution.tclv.me/owallowallo)

Hopefully more soon :)

If there should be a frontend with login to manage photos and videos, it could be a separate project and at the simplest form all it would require is a file manager fixed to usernames at `./public/accounts/[username]`. In fact, perhaps these could eventually optionally correspond to OS usernames (e.g. in `/home/` or `C:/Users/` etc).

### Short list of needs / TODOs

- Add infinite scroll paging option

- Add filesystem cache for thumbnail generation

- Use a cog icon instead of a square to indicate a settings modal
