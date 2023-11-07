



podman build --pull --no-cache --platform linux/amd64 -t simplenodeweb:v21 .


docker build --pull --no-cache -t divine6/simplenodeweb:v32 .
docker push divine6/simplenodeweb:v100 .

docker build --platform linux/amd64 -t divine6/simplenodeweb:v101 .
docker push divine6/simplenodeweb:v101 .


docker run --platform linux/amd64 -p 3000:4000 -it 2078e4396b3c 