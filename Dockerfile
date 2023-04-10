FROM node:alpine

# Setting up the work directory

WORKDIR /app




# Installing dependencies

COPY package.json ./

#COPY package-lock.json ./

COPY ./ ./

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "start:dev"]