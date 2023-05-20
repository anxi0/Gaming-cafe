FROM ubuntu:latest
LABEL maintainer "anxi0 <jjw01040@gmail.com>"
RUN apt-get update
RUN apt-get install -y curl 
RUN curl -sL https://deb.nodesource.com/setup_18.x | sudo -E bash - 
RUN apt-get install -y nodejs
RUN npm i -g yarn
RUN yarn
