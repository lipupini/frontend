FROM node:16
EXPOSE 1234
WORKDIR /home/node/app
CMD [ "yarn", "dev", "--port", "1234" ]
