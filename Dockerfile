FROM node:latest

WORKDIR /REACT-WEATHER-APP/src

COPY . .

COPY package*.json ./

RUN npm run build

CMD ["npm", "start"]


