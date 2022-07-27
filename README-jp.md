![image](https://user-images.githubusercontent.com/595446/177451446-55fcc030-04ec-4ed7-9a69-d5ccfc0b53d8.png)

# Instalution

InstalutionはInstagramの革命的な解決策を目指します。

開発コミュニティを立ち上げるため、同じ志を持つ仲間を募集中です。

1) ポートフォリオを管理したいアーティスト
2) コードに貢献したい開発者
3) プロジェクトに関するアイデアや洞察をお持ちのユーザー

いずれかのグループに招待します。

- マトリックス @ #instalution:catgirl.cloud
- WhatsApp](https://chat.whatsapp.com/KI5jhmO2jo43vMXyo8c1iF)
- テレグラム](https://t.me/instalution)

## 必要条件

Instalutionの導入には、現在4つの方法があります。どれか1つの方法を選択してください。

### pnpM メソッド

- [pnpM](https://pnpm.io/installation)

### Docker Compose メソッド

- Docker](https://docs.docker.com/get-docker/)
- Docker Compose](https://docs.docker.com/compose/install/)。

### Dockerfileメソッド

- [Docker](https://docs.docker.com/get-docker/)

### Vagrantの方法

- Vagrant](https://vagrantup.com/)
- VirtualBox](https://virtualbox.org/)

## Instalution のインストール

### オプション1: pnpMを使ったInstalutionのインストール
1) `git clone https://github.com/instalution/frontend.git instalution` を実行します。
2) `cd installution` を実行します。
3) `pnpm install` を実行します。
4) `pnpm next telemetry disable` を実行します。
5) インスタグラムからデータの[アーカイブをダウンロード](https://help.instagram.com/181231772500920)
6) アーカイブ内の `media/posts/` ディレクトリの内容を `./public/accounts/[archive_folder_name]` に解凍します。ベースフォルダ名がユーザー名となり、Instalutionが各サブフォルダ内の画像や動画を全て読み込む。
7) `pnpm dev` -- Instalution は http://localhost:1234 で利用できるようになります。

### オプション 2: Docker Compose を使って Instalution をインストールする。
1) `git clone https://github.com/instalution/frontend.git instalution` を実行します。
2) `cd instalution` を実行します。
3) インスタグラムからデータの[アーカイブをダウンロード](https://help.instagram.com/181231772500920)
4) アーカイブ内の `media/posts/` ディレクトリの内容を `./public/accounts/[archive_folder_name]` に解凍します。ベースフォルダ名がユーザー名となり、Instalutionはサブフォルダごとに画像や動画を読み込んでいきます。
5) `docker-compose up` -- Instalution は http://localhost:1234 で利用できるようになります。

### オプション 3: Dockerfile を使って Instalution をインストールする。

1) `git clone https://github.com/instalution/frontend.git instalution` を実行します。
2) `cd instalution` を実行します。
3) インスタグラムからデータのアーカイブをダウンロード](https://help.instagram.com/181231772500920)
4) アーカイブ内の `media/posts/` ディレクトリの内容を `./public/accounts/[archive_folder_name]` に解凍します。ベースとなるフォルダ名がユーザー名となり、Instalutionは全てのサブフォルダ内の画像や動画を読み込む。
5) `docker build --tag=frontend .` を実行します。
6) `docker run --volume=$(pwd):/home/node/app --publish 1234:1234 frontend` -- Instalution は http://localhost:1234 で利用できるはずです。

### オプション4: VagrantでInstalutionをインストールする。
1) `git clone https://github.com/instalution/frontend.git instalution` を実行します。
2) `cd instalution` を実行します。
3) インスタグラムからデータのアーカイブをダウンロード](https://help.instagram.com/181231772500920)
4) アーカイブ内の `media/posts/` ディレクトリの内容を `./public/accounts/[archive_folder_name]` に解凍します。ベースフォルダ名がユーザー名となり、Instalutionが各サブフォルダ内の画像や動画を全て読み込む。
5) `vagrant up` -- Instalution は http://localhost:1234 で利用できるはずです。

### ステータス

Instalution は現在、一度解凍したアーカイブから画像とビデオを表示します。技術的にはInstagramのアーカイブである必要はなく、usernameフォルダに任意のメディアを入れることができます。

デモはおそらく [instalution.tclv.me/owallowallo](https://instalution.tclv.me/owallowallo) で公開されています。

近日中に公開予定です :)

もし、写真やビデオを管理するためにログインするフロントエンドが必要なら、それは別のプロジェクトになるでしょうし、最も単純な形では、ユーザ名に対して `./public/accounts/[username]` に固定されたファイルマネージャが必要なだけでしょう。実際、これらは最終的には OS のユーザ名にも対応できるかもしれません (例: `/home/` や `C:/Users/` などに)。

### 必要なもの / TODO の短いリスト

- 無限スクロールのページングオプションを追加

- サムネイル生成のためのファイルシステムキャッシュの追加

*Note that at this time all translations are directly via DeepL Machine Translation. Please help!*
