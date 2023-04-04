
#! /bin/bash
docker stop my-helper-app
docker rm my-helper-app
docker rmi kvnkrruk/ha_automationhelper_be
sudo docker run -t -d -p 9005:9005 --name my-helper-app kvnkrruk/ha_automationhelper_be   
