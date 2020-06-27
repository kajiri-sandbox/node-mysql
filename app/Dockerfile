FROM node:latest

WORKDIR /home/app

COPY ./app/package*.json ./

RUN npm install
RUN npm i -g nodemon

COPY ./app ./

EXPOSE 3000

CMD nodemon app.js localhost 3000