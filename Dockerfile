FROM node:latest

# Make a folder in your image where your app's source code can live
RUN mkdir -p /src/app

# Tell your container where your app's source code will live
WORKDIR /src/app

# What source code do you what to copy, and where to put it?
COPY . /src/app

RUN npm install
RUN npm run seed

EXPOSE 8080

CMD [ "npm", "start" ]