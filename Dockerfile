FROM node:20

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

# install static server
RUN npm install -g serve

# serve build folder
CMD ["serve", "-s", "dist", "-l", "80"]