FROM node:latest

WORKDIR /REACT-WEATHER-APP/src

COPY . .

RUN npm run build

CMD ["npm", "start"]


