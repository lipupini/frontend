![image](https://user-images.githubusercontent.com/595446/177451446-55fcc030-04ec-4ed7-9a69-d5ccfc0b53d8.png)

# Instalution

Instalution旨在成为Instagram的一个革命性的解决方案。

在寻找志同道合的人，开始一个发展社区。

1) 愿意控制自己作品集的艺术家
2) 对贡献代码感兴趣的开发者
3) 对该项目有任何想法或见解的用户

## 要求

目前有四种方法可以支持Instalution的启动和运行。你只需要选择一种方法。

### pnpM方法

- [pnpM](https://pnpm.io/installation)

### Docker Compose方法

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

### Dockerfile方法

- [Docker](https://docs.docker.com/get-docker/)

### Vagrant方法

- [Vagrant](https://vagrantup.com/)
- [VirtualBox](https://virtualbox.org/)

## 安装Instalution

### 选项1：用pnpM安装Instalution
1) `git clone https://github.com/instalution/frontend.git instalution`
2) `cd instalution`
3) `pnpm install`
4) `pnpm next telemetry disable`。
5) [从Instagram下载你的数据档案](https://help.instagram.com/181231772500920)
6) 将存档中的`media/posts/`目录的内容提取到`./public/accounts/[archive_folder_name]`。基础文件夹名称将成为用户名，Instalution将读取每个子文件夹中的每张图片和视频。
7) `pnpm dev` -- Instalution现在应该可以在http://localhost:1234。

###选项2：用Docker Compose安装Instalution
1) `git clone https://github.com/instalution/frontend.git instalution`
2) `cd instalution `
3) [从Instagram下载你的数据档案](https://help.instagram.com/181231772500920)
4) 将存档中的`media/posts/`目录的内容提取到`./public/accounts/[archive_folder_name]`。基础文件夹名称将成为用户名，Instalution将读取每个子文件夹中的每张图片和视频。
5) `docker-compose up` -- Instalution现在应该可以在http://localhost:1234。

###选项3：用Dockerfile安装Instalution

1) `git clone https://github.com/instalution/frontend.git instalution`
2) `cd instalution`。
3) [从Instagram下载你的数据档案](https://help.instagram.com/181231772500920)
4) 将存档中的`media/posts/`目录的内容提取到`./public/accounts/[archive_folder_name]`。基础文件夹名称将成为用户名，Instalution将读取每个子文件夹中的每张图片和视频。
5) `docker build --tag=frontend .`。
6) `docker run --volume=$(pwd):/home/node/app --publish 1234:1234 frontend` -- Instalution现在应该可以在http://localhost:1234。

###选项4：用Vagrant安装Instalution
1) `git clone https://github.com/instalution/frontend.git instalution`
2) `cd instalution `
3) [从Instagram下载你的数据档案](https://help.instagram.com/181231772500920)
4) 将存档中的`media/posts/`目录下的内容提取到`./public/accounts/[archive_folder_name]`。基础文件夹名称将成为用户名，Instalution将读取每个子文件夹中的每张图片和视频。
5) `vagrant up`--Instalution应该可以在http://localhost:1234。

###状态

目前，Instalution在提取档案后同时显示图片和视频。严格来说，它不一定是Instagram的档案，你可以把任何媒体放在用户名文件夹中。

如果应该有一个登录管理照片和视频的前端，它可以是一个独立的项目，在最简单的形式下，它所需要的是一个固定在`./public/accounts/[username]`的用户名的文件管理器。事实上，也许这些最终可以选择性地对应于操作系统的用户名（例如，在`/home/`或`C:/Users/`等）。

### 需求/TODO的简短清单

- 增加无限滚动的分页选项

- 为生成缩略图添加文件系统缓存

*Note that at this time all translations are directly via DeepL Machine Translation. Please help!*
