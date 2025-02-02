FROM node:18

WORKDIR /myapps

# Copy package.json first to cache dependencies
COPY package.json package-lock.json ./

RUN npm install

# Copy all other files
COPY . .

CMD ["npm", "start"]

EXPOSE 3000
