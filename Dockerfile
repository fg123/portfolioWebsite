FROM alpine as build
RUN apk add --no-cache bash git gcc g++ make readline-dev libc-dev libxml2-dev libpng-dev icu-dev libharu-dev

WORKDIR /
ARG CACHEBUST=7
RUN ["git", "clone", "https://github.com/fg123/wendy.git"]
ARG CACHEBUST=8
RUN ["git", "clone", "https://github.com/fg123/nick.git"]

WORKDIR /wendy
RUN ["make", "release"]

WORKDIR /nick
RUN ["make"]

ENV PATH="/nick/bin:/wendy/bin:${PATH}"

WORKDIR /
COPY . .

RUN ["make"]

FROM frolvlad/alpine-python3
RUN apk add --no-cache bash
COPY --from=build /dist /var/www/
ENTRYPOINT cd /var/www && python -m http.server 8080
