FROM node:18

WORKDIR /myapps

COPY package.json .

RUN npm install

COPY . .

CMD [ "npm" , "start" ]

EXPOSE 3000
