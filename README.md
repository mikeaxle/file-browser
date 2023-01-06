# File Browser - JOBJACK Assessment
## Description
- This repo contains two sub project folders:
    - file browser api (Node/Express)
    - file browser UI (Angular) 

## Prerequisites
- docker with docker-compose installed

## Setup Instructions
- in the root directory run: `docker-compose up -d` 
- once docker has started the containers, open the following url in your brower: http://localhost:4200/


## Note:
- This project was created on an arm64 machine, please change the docker node images to thier amd64 counter parts if you are node running an arm64 Machine or the build may fail. 