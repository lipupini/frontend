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

### FaQ You

- If you are proxying via Nginx, and run into a weird issue with Nginx serving static files via a specific user, then try this:

```
nano /etc/nginx/nginx.conf
# Look for the line that starts with `user` -- You are trying to find the process by which Nginx runs
# Example: user webserver;
# Now type this:
ls -la /var/lib/
# Example output:
drwxr-xr-x    4 root       root          4096 Jun 30 19:52 letsencrypt
drwxr-xr-x    2 root       root          4096 May  3 13:43 misc
drwxr-x---    4 webserver  webserver     4096 May 24 00:35 nginx
drwx------    2 root       root          4096 Jun  1 22:55 seedrng
# Notice the folder for `nginx`. In this example if your "webserver" user does not match what you saw in `nginx.conf`, then you need to type this:
chown -R webserver: /var/lib/nginx/
# After that the `nginx` folder user and group should match when you type `ls -la /var/lib/`
# If you run into 5 or more such issues then it is recommended that you just try switching to Apache (specifically after 5 or more such issues)
```
