FROM node:alpine

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . ./

ENV MONGO_URL = mongodb+srv://goks_r:naruto_09@zomato-project.ms0vd.mongodb.net/zomato?retryWrites=true&w=majority

CMD ["npm", "run", "start"]
