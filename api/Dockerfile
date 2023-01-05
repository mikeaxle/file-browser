# Defining a node image to be used as giving it an alias of "build"
# Please comment line 3 and uncomment line 4 if you are not using an arm CPU
FROM arm64v8/node AS build
# FROM node:lts-alpine AS build

# Create a Virtual directory inside the docker image
WORKDIR /dist

# Copy files to virtual directory
COPY package.json package-lock.json ./

# Copy files from local machine to virtual directory in docker image
COPY . .

EXPOSE 3000

# Run command in Virtual directory
CMD [ "/bin/bash", "-c","npm install;npm run build;node dist/app.js" ]