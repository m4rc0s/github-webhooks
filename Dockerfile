from node:14

WORKDIR /usr/src/event-listener

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD ["node", "src/server.mjs"]

