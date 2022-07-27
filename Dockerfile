FROM gplane/pnpm:alpine@sha256:59ce8b532fc0834aee90bb9c366c6a4b05e03f3ced246e2edcdcc04939cca207 as pnpm-alpine
EXPOSE 1234
WORKDIR /home/node/app
CMD [ "ash", "-c", "pnpm install && pnpm dev --port 1234" ]
