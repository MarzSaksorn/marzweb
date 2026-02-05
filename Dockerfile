FROM alpine
WORKDIR /web_server

COPY /content .

EXPOSE 80 443 

RUN apk add nginx htop fish btop 

CMD sh -c "nginx && sleep infinify"