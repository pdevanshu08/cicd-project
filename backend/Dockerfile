FROM node:18

WORKDIR /myapps

COPY package.json .

RUN npm install

COPY . .

CMD [ "node" , "server.js" ]

EXPOSE 5000
