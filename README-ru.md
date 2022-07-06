![image](https://user-images.githubusercontent.com/595446/177451446-55fcc030-04ec-4ed7-9a69-d5ccfc0b53d8.png)

# Instalution

Instalution стремится стать революционным решением для Instagram.

В поисках единомышленников для создания сообщества разработчиков:

1) Художники, которые хотели бы взять под контроль свои портфолио
2) Разработчики, заинтересованные в создании кода
3) Пользователи с любыми идеями или соображениями по проекту.

Присоединяйтесь к группе Telegram: [https://t.me/instalution](https://t.me/instalution)

## Требования

В настоящее время существует четыре поддерживаемых метода для начала работы с Instalution. Вам нужно выбрать только один метод:

### Yarn Method

- [Yarn](https://yarnpkg.com/)

### Docker Compose Method

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

### Dockerfile Method

- [Docker](https://docs.docker.com/get-docker/)

### Метод Vagrant

- [Vagrant](https://vagrantup.com/)
- [VirtualBox](https://virtualbox.org/)

## Установка Instalution

### Вариант 1: Установка Instalution с помощью Yarn
1) `git clone https://github.com/groovenectar/instalution.git`
2) `cd instalution`
3) `yarn`
4) `yarn next telemetry disable`
5) [Скачайте архив](https://help.instagram.com/181231772500920) ваших данных из Instagram
6) Распакуйте содержимое директории `media/posts/` в архиве в `./public/accounts/[имя_папки_архива]`. Имя основной папки станет именем пользователя, и Instalution будет считывать каждое изображение и видео в каждой вложенной папке.
7) `yarn dev` -- теперь Instalution должен быть доступен по адресу http://localhost:1234.

### Вариант 2: Установка Instalution с помощью Docker Compose
1) `git clone https://github.com/groovenectar/instalution.git`.
2) `cd instalution`
3) [Скачайте архив](https://help.instagram.com/181231772500920) ваших данных из Instagram
4) Распакуйте содержимое директории `media/posts/` в архиве в `./public/accounts/[имя_папки_архива]`. Имя основной папки станет именем пользователя, и Instalution прочитает каждое изображение и видео в каждой вложенной папке.
5) `docker-compose up` -- Instalution теперь должен быть доступен по адресу http://localhost:1234.

### Вариант 3: Установка Instalution с помощью Dockerfile

1) `git clone https://github.com/groovenectar/instalution.git`.
2) `cd instalution`
3) [Скачайте архив](https://help.instagram.com/181231772500920) ваших данных из Instagram
4) Распакуйте содержимое директории `media/posts/` в архиве в `./public/accounts/[имя_папки_архива]`. Имя основной папки станет именем пользователя, и Instalution будет считывать каждое изображение и видео в каждой вложенной папке.
5) `docker build --tag=frontend .`
6) `docker run --volume=$(pwd):/home/node/app --publish 1234:1234 frontend` -- Теперь Instalution должен быть доступен по адресу http://localhost:1234.

### Вариант 4: Установка Instalution с помощью Vagrant
1) `git clone https://github.com/groovenectar/instalution.git`
2) `cd instalution`
3) [Скачайте архив](https://help.instagram.com/181231772500920) ваших данных из Instagram
4) Распакуйте содержимое директории `media/posts/` в архиве в `./public/accounts/[имя_папки_архива]`. Имя основной папки станет именем пользователя, и Instalution прочитает каждое изображение и видео в каждой вложенной папке.
5) `vagrant up` -- Instalution должен быть доступен по адресу http://localhost:1234.

### Состояние

В настоящее время Instalution отображает изображения и видео из архива после извлечения. Технически это не обязательно должен быть архив Instagram, вы можете поместить любое медиа в папки с именем пользователя.

Демонстрация, вероятно, доступна на [instalution.tclv.me/owallowallo](https://instalution.tclv.me/owallowallo).

Надеюсь, скоро будет больше :)

Если должен быть фронтенд с логином для управления фотографиями и видео, это может быть отдельным проектом, и в простейшей форме все, что потребуется, это файловый менеджер, закрепленный за именами пользователей по адресу `./public/accounts/[username]`. На самом деле, возможно, в конечном итоге они могли бы опционально соответствовать именам пользователей ОС (например, в `/home/` или `C:/Users/` и т.д.).

### Краткий список потребностей / TODO

- Добавить опцию бесконечной прокрутки страниц

- Добавить кэш файловой системы для генерации эскизов

*Note that at this time all translations are directly via DeepL Machine Translation. Please help!*
