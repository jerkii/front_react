FROM node:12.2-alpine
RUN mkdir /app
WORKDIR /app
COPY /src /app/src
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install react-scripts@3.0.1 -g --silent
RUN npm install --production --silent && mv node_modules ../
EXPOSE 3000