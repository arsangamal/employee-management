FROM node:24.2-alpine

WORKDIR /app

COPY /package*.json ./

RUN npm install

COPY . .

EXPOSE 3001

CMD ["node", "src/server.ts"]
