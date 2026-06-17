FROM node:20-alpine

RUN npm install -g sass live-server

WORKDIR /app

CMD ["sh", "-c", "sass --watch --poll scss:. --no-source-map & live-server --host=0.0.0.0 --port=8080 --no-browser"]
