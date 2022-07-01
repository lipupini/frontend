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
6) Extract the archive into `./public/accounts/[archive_folder_name]`
7) `yarn start`
8) [Delete your Instagram account](https://help.instagram.com/139886812848894/)

### Status

While in very early stages, Instalution already supports the standard archive directory structure as of June 2022, and will display both images and video from the archive once extracted.

A demo may (or may not) be available at https://instalution.tclv.me/owallowallo

### Short list of needs

- Both pagination and infinite scroll options with toggle

- Thumbnail generation and cache for all responsive viewports
