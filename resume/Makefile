SHELL := /bin/bash

all:
	nick template.pdfml main.pdfml -o FelixGuoResume.pdf
	nick FULL_CV=1 template.pdfml main.pdfml -o FelixGuoResumeExtended.pdf

clean:
	rm FelixGuoResume.pdf
	rm FelixGuoResumeExtended.pdf

.PHONY: clean all
