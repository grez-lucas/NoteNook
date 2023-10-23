FROM node:14

WORKDIR /app

COPY package*.json ./

# Add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

RUN npm install

COPY . .

EXPOSE 3000

CMD npm start --host 0.0.0.0 --port 3000 --disableHostCheck true