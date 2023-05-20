![image](https://user-images.githubusercontent.com/595446/177451446-55fcc030-04ec-4ed7-9a69-d5ccfc0b53d8.png)

# Instalution

설치는 인스 타 그램에 혁신적인 솔루션이 될 것을 목표로하고있다.

같은 생각을 가진 개인을 찾아 개발 커뮤니티를 시작합니다:

1)자신의 포트폴리오를 제어 하 고 싶은 예술가
2)코드 기여에 관심이있는 개발자
3)프로젝트에 대한 아이디어 또는 통찰력을 가진 사용자

## 요구 사항

There are currently four supported methods for getting up and running with Instalution. You only need to pick one method:

### pnpM 방법 또는 옵션

- [pnpM](https://pnpm.io/installation)

### Docker Compose 방법 또는 옵션

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

### Dockerfile 방법 또는 옵션

- [Docker](https://docs.docker.com/get-docker/)

### Vagrant 방법 또는 옵션

- [Vagrant](https://vagrantup.com/)
- [VirtualBox](https://virtualbox.org/)

## 설치 Instalution

### Option 1: 함께 설치 pnpM 방법 또는 옵션
1) `git clone https://github.com/instalution/frontend.git instalution`
2) `cd instalution`
3) `pnpm install`
4) `pnpm next telemetry disable`
5) [5)인스 타 그램에서 데이터의 아카이브를 다운로드 Instagram](https://help.instagram.com/181231772500920)
6) 에 아카이브의'미디어/게시물/'디렉토리의 내용을 추출 `./public/accounts/[archive_folder_name]`. 기본 폴더 이름은 사용자 이름이 될 것이며,설치는 모든 하위 폴더에있는 모든 이미지와 비디오를 읽습니다.
7) `pnpm dev`설치 지금 사용할 수 있어야합니다 http://localhost:1234

### Option 2: 함께 설치 Docker Compose 방법 또는 옵션
1) `git clone https://github.com/instalution/frontend.git instalution`
2) `cd instalution`
3) [5)인스 타 그램에서 데이터의 아카이브를 다운로드 Instagram](https://help.instagram.com/181231772500920)
4) 에 아카이브의'미디어/게시물/'디렉토리의 내용을 추출 `./public/accounts/[archive_folder_name]`. 기본 폴더 이름은 사용자 이름이 될 것이며,설치는 모든 하위 폴더에있는 모든 이미지와 비디오를 읽습니다.
5) `docker-compose up` -- 설치 지금 사용할 수 있어야합니다 http://localhost:1234

### Option 3: 함께 설치 Dockerfile 방법 또는 옵션

1) `git clone https://github.com/instalution/frontend.git instalution`
2) `cd instalution`
3) [5)인스 타 그램에서 데이터의 아카이브를 다운로드 Instagram](https://help.instagram.com/181231772500920)
4) 에 아카이브의'미디어/게시물/'디렉토리의 내용을 추출 `./public/accounts/[archive_folder_name]`. 기본 폴더 이름은 사용자 이름이 될 것이며,설치는 모든 하위 폴더에있는 모든 이미지와 비디오를 읽습니다.
5) `docker build --tag=frontend .`
6) `docker run --volume=$(pwd):/home/node/app --publish 1234:1234 frontend` -- 설치 지금 사용할 수 있어야합니다 http://localhost:1234

### Option 4: 함께 설치 Vagrant 방법 또는 옵션
1) `git clone https://github.com/instalution/frontend.git instalution`
2) `cd instalution`
3) [5)인스 타 그램에서 데이터의 아카이브를 다운로드 Instagram](https://help.instagram.com/181231772500920)
4) 에 아카이브의'미디어/게시물/'디렉토리의 내용을 추출 `./public/accounts/[archive_folder_name]`. 기본 폴더 이름은 사용자 이름이 될 것이며,설치는 모든 하위 폴더에있는 모든 이미지와 비디오를 읽습니다.
5) `vagrant up` -- 설치 지금 사용할 수 있어야합니다 http://localhost:1234

###상태

설치는 현재 한 번 추출 아카이브에서 이미지와 비디오를 모두 표시합니다. 그것은 기술적으로 인스 타 그램 아카이브가 될 필요가 없습니다,당신은 사용자 이름 폴더에있는 모든 미디어를 넣을 수 있습니다..

사진 및 비디오를 관리 하기 위해 로그인과 프론트 엔드가 있어야 하는 경우,그것은 별도 프로젝트 수 및 간단한 형태로 필요한 모든 사용자 이름에 고정 된 파일 관리자입니다`./공개/계정/[사용자 이름]`. 사실,아마도 이들은 결국 선택적으로 운영 체제 사용자 이름에 해당 할 수 있습니다

###요구/왜 그렇게의 짧은 목록

-무한 스크롤 페이징 옵션 추가

-썸네일 생성을위한 파일 시스템 캐시 추가

*Note that at this time this translation is directly via Yandex Machine Translation. Please help!*
