FROM node:18

WORKDIR /myapps

# Copy package.json first to cache dependencies
COPY package.json package-lock.json ./

RUN npm install

# Copy all other files
COPY . .

CMD [ "node", "server.js" ]

EXPOSE 5000
