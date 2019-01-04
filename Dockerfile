FROM alpine as build
RUN apk add --no-cache bash git gcc g++ make readline-dev libc-dev libxml2-dev libpng-dev icu-dev libharu-dev

WORKDIR /
RUN ["git", "clone", "https://github.com/fg123/wendy.git"]
RUN ["git", "clone", "https://github.com/fg123/nick.git"]

WORKDIR /wendy
RUN ["make", "release"]

WORKDIR /nick
RUN ["make"]

WORKDIR /
COPY . .

RUN ["make"]

FROM frolvlad/alpine-python3
COPY /dist/* /var/www
ENTRYPOINT cd /var/www && python -m http.server 8080
