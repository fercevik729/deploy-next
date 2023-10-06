FROM node:alpine

WORKDIR /app

COPY package*.json ./

# install dependencies
RUN npm install

COPY . .
# build
RUN npm run build

ENV NODE_ENV=production

EXPOSE 3000

CMD ["npm", "start"]

HEALTHCHECK --interval=5s --timeout=5s --retries=3 \
    CMD curl --fail http://localhost:3000 || exit 1
