FROM --platform=linux/amd64 node:18.18-alpine3.18
#RUN mkdir -p /app
WORKDIR /app
COPY pack*.json /app
RUN npm install

COPY . /app

EXPOSE 4000

CMD ["node","server.js"]