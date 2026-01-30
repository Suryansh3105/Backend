# base image 
 FROM node:current-alpine3.22

 WORKDIR /home/app/
 RUN apk add --no-cache curl

 COPY package-lock.json /home/app/package-lock.json
 COPY package.json /home/app/package.json
RUN npm install

# # installing the tools needed for the app

# #RUN apt-get update
# #RUN apt install -y curl
# #RUN curl -sL https://deb.nodesource.com/setup_22.x -o /tmp/nodesource_setup.sh
# #RUN bash /tmp/nodesource_setup.sh
# #RUN apt install -y nodejs

# # copying the source code to docker image

 COPY index.js /home/app/index.js

 ENV PORT=8000
 EXPOSE 8000

 CMD ["npm","start"]

# multi stage docker build 

# stage 1
#FROM node:current-alpine3.22 AS base

#WORKDIR /home/app

#COPY package*.json ./
#RUN npm install
#COPY index.js /home/app/index.js

# stage 2

#FROM node:slim

#WORKDIR /home/app


#COPY --from=base /home/app/node_modules ./node_modules
#COPY --from=base /home/app/index.js /home/app/index.js

#CMD ["node","index.js"]
