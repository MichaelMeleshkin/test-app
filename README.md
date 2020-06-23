## How to run

##### 1. Install Docker Compose
[How to install Docker Compose](https://docs.docker.com/compose/install/)

##### 2. Run "docker-compose up" from the project folder

##### 3. When setup is done, go to a browser by the following link [http://localhost:4200](http://localhost:4200)

##### PS. In case if you have any troubles...
```text
$ docker stop $(docker ps -a -q)   // stops all containers
```
```text
$ docker rm $(docker ps -a -q)   // removes any stopped containers
```
```text
$ docker system prune -a   // removes any stopped containers, all unused images, volumes, and networks
```
