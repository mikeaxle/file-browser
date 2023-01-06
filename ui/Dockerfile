### STAGE 1:BUILD ###
# Defining a node image to be used as giving it an alias of "build"
# Please comment line 4 and uncomment line 5 if you are not using an arm CPU
FROM arm64v8/node AS build
# FROM node:lts-alpine AS build

# Create a Virtual directory inside the docker image
WORKDIR /dist/src/app

# Run command in Virtual directory
RUN npm cache clean --force

# Copy files from local machine to virtual directory in docker image
COPY . .

# Run command in Virtual directory
CMD [ "/bin/bash", "-c","npm install;npm run build" ]


### STAGE 2:RUN ###
# Defining nginx image to be used
FROM nginx:latest AS ngi

# Copying compiled code and nginx config to different folder
# NOTE: This path may change according to your project's output folder 
COPY --from=build /dist/src/app/dist/ui /usr/share/nginx/html
COPY /nginx.conf  /etc/nginx/conf.d/default.conf

# Exposing a port, here it means that inside the container 
# the app will be using Port 80 while running
EXPOSE 80

