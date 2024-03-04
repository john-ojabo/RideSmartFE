#S1
FROM node:20
WORKDIR /app

COPY package*.json ./
RUN yarn install
COPY . .
RUN yarn generate
ENV DATABASE_URL="Database URL"
ENV BASE_URL="Backend APP URL"
ENV SECRET_KEY="Secret Key"
ENV FLWPAYMENT_ENDPOINT=https://api.flutterwave.com/v3/payments
ENV FLWSECK_TEST="Flutterwave Secret Test key "
ENV FLWPUBK_TEST="Flutterwave Public Test key "
ENV UPLOADED_LOGO="Uploaded logo image URL"
CMD ["yarn", "dev"]
