FROM node:latest

WORKDIR /home/app

COPY ./app/package*.json ./

RUN npm install
RUN npm i -g nodemon

COPY ./app ./

EXPOSE 3000

ARG HOST
ARG USER
ARG PASSWORD
ARG DATABASE
ENV HOST=$HOST USER=$USER PASSWORD=$PASSWORD DATABASE=$DATABASE

CMD nodemon app.js localhost 3000
