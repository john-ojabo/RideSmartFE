#S1
FROM node:20 as build
WORKDIR /app
ARG VITE_DEV_APP_URL
COPY package.json yarn.lock ./
RUN yarn install && yarn global add serve
COPY . .
RUN yarn build

#S2
FROM nginx
WORKDIR /usr/share/nginx/html
COPY --from=build /app/dist/ .
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
