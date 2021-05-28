FROM node:16-alpine
RUN apk add tesseract-ocr poppler-utils
RUN mkdir /app
WORKDIR /app
COPY . .
RUN npm i
CMD ["node","./bin/www"]
