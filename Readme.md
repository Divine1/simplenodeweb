docker build --pull --no-cache --platform linux/amd64 -t simplenodeweb:v5 .

docker run --platform linux/amd64 -p 3000:4000 -it 2078e4396b3c 