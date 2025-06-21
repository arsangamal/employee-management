FROM node:24.2-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install
RUN npm rebuild lightningcss

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
