FROM node:latest

WORKDIR /home/app

COPY ./app/package*.json ./

RUN npm install
RUN npm i -g nodemon

COPY ./app ./


ARG HOST
ARG USER
ARG PASSWORD
ARG DATABASE
ARG PORT
ENV HOST=$HOST USER=$USER PASSWORD=$PASSWORD DATABASE=$DATABASE PORT=$PORT

EXPOSE $PORT
CMD nodemon app.js localhost $PORT