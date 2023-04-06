FROM node:12.2.0-alpine
WORKDIR server
COPY . .
RUN npm install
# RUN npm run test
EXPOSE 5000
CMD ["node","server.js"]
