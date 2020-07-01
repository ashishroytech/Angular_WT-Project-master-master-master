FROM nginx:alpine
COPY /dist/WT-Project /usr/share/nginx/html
EXPOSE 80