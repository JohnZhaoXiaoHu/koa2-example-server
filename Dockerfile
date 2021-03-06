FROM node:7.7.1

ENV HOME /home/app
RUN mkdir -p /home/app

WORKDIR $HOME

COPY package.json .
COPY tsconfig.json .

RUN npm install nodemon -g
RUN npm install

COPY ./src/ ./src/

CMD ["npm", "run", "start"]
