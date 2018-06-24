FROM node:8
RUN mkdir /q-hiring-redux
WORKDIR /q-hiring-redux
ADD . /q-hiring-redux
RUN npm --version
RUN npm install
RUN ls -al
CMD npm run serve
EXPOSE 8080
