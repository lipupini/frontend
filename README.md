# Instalution

Instalution aims to be a revolutionary solution to Instagram

## Requirements

### Yarn Method

- [Yarn](https://yarnpkg.com/) (and anything Yarn requires)

### Docker Compose Method

- [Docker Compose](https://docs.docker.com/compose/install/) (and anything Docker Compose requires)

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

### Status

While in very early stages, Instalution will display both images and video from the archive once extracted. It technically doesn't have to be an Instagram archive, you can put any media in the username folders.

A demo may (or may not) be available at [instalution.tclv.me/owallowallo](https://instalution.tclv.me/owallowallo)

If there should be a frontend with login to manage photos and videos, it could be a separate project and at the simplest form all it would require is a file manager fixed to usernames at `./public/accounts/[username]`. In fact, perhaps these could eventually optionally correspond to OS usernames (e.g. in `/home/` or `C:/Users/` etc).

### Short list of needs / TODOs

- Both pagination and infinite scroll options with toggle

- Thumbnail generation and cache
