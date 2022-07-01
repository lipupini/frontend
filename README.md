# Instalution

Instalution aims to be a revolutionary solution to Instagram

### Requirements
- [Yarn](https://yarnpkg.com/) (And anything Yarn requires)

### Installing Instalution
1) `git clone https://github.com/groovenectar/instalution.git`
2) `cd instalution`
3) `yarn`
4) `yarn next telemetry disable`
5) [Download an archive](https://help.instagram.com/181231772500920) of your data from Instagram
6) Extract the contents of the `media/posts/` directory in the archive to `./public/accounts/[archive_folder_name]`. The base folder name will become the username, and Instalution will read every image and video in every subfolder.
7) `yarn start`
8) [Delete your Instagram account](https://help.instagram.com/139886812848894/)

### Status

While in very early stages, Instalution will display both images and video from the archive once extracted. It technically doesn't have to be an Instagram archive, you can put any media in the username folders.

A demo may (or may not) be available at [instalution.tclv.me/owallowallo](https://instalution.tclv.me/owallowallo)

If there should be a frontend with login to manage photos and videos, it could be a separate project and at the simplest form all it would require is a file manager fixed to usernames at `./public/accounts/[username]`

### Short list of needs / TODOs

- Both pagination and infinite scroll options with toggle

- Thumbnail generation and cache

- Docker container
