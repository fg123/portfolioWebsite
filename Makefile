SHELL := /bin/bash

all: setup website resume

setup:
	mkdir -p dist

website:
	$(MAKE) -C website/
	cp -r website/gen/* dist/
	cp -r static/* dist/

resume:
	$(MAKE) -C resume/
	cp resume/FelixGuoResume.pdf dist/

.PHONY: clean all website resume

clean:
	rm -rf dist/*
	$(MAKE) -C website/ clean
	$(MAKE) -C resume/ clean
