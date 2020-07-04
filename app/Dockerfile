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

# https://dragonprogrammer.com/deploy-docker-container-gcp/
# -p 80:3000 の代わり
CMD nodemon app.js localhost 3000 && sudo iptables -A PREROUTING -t nat -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 3000
