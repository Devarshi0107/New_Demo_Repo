FROM node:latest

COPY index.js /home/app/index.js
COPY package.json /home/app/package.json

WORKDIR /home/app/

RUN npm install

CMD ["node", "index.js"]

EXPOSE 3000
