FROM node:lts-alpine
WORKDIR /observer
COPY . /observer
RUN apk update && apk add bash
RUN npm i --only=production
RUN chmod +x /usr/local/bin/docker-entrypoint.sh
CMD [ "./wait-for-it.sh", "rabbitmq:15672", "-s", "-t", "30", "--","node", "obse.js" ]
