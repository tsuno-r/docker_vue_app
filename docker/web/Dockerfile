FROM node:14.15.0-alpine

WORKDIR /app

RUN npm install -g @vue/cli

COPY ./start.sh /scripts/start.sh

#shフォルダの権限追加（全員実行可）
RUN chmod +x /scripts/*

#初期実行
ENTRYPOINT [ "/scripts/start.sh" ]