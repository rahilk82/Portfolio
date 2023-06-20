FROM node:16-alpine

RUN mkdir -p /opt/app-root/src

WORKDIR /opt/app-root/src

ADD package.json /opt/app-root/src/package.json

RUN npm install

COPY . .

RUN npm run build

RUN npm install -g serve 

CMD ["serve", "-s", "build", "-l", "3000"] 