docker build --platform linux/amd64 -t simplenodeweb:v2 .

docker run --platform linux/amd64 -p 3000:4000 -it 2078e4396b3c 