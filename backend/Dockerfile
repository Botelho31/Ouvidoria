FROM node:10-alpine
WORKDIR /server
COPY package.json /server
RUN mkdir /server/public
RUN npm install
RUN npm install -g nodemon
COPY . /server
CMD npm start