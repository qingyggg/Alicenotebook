FROM node:16-alpine


EXPOSE 5000
WORKDIR /app
ENV LOG_LEVEL=debug
COPY . /app
USER node
CMD [ "node", "./server.js" ]
