SHELL := /bin/bash

all: website resume

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
