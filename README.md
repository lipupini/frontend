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
7) Copy `.env.local.example` to `.env.local`
8) In `.env.local`, put your archive folder name in the `ACCOUNT_ARCHIVE_FOLDER_NAME` variable
9) `yarn start`
10) [Delete your Instagram account](https://help.instagram.com/139886812848894/)

### Status

While in very early stages, Instalution already supports the standard archive directory structure as of June 2022, and will display both images and video from the archive once extracted.

A demo may (or may not) be available at https://instalution.tclv.me/
