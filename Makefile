LIB_FILES=$(shell ls src/lib/*.ts) lib/actions.ts lib/conditions.ts
BIN_FILES:=$(shell ls src/bin/*.ts)


# Typescript compilation

lib: $(LIB_FILES) tsconfig-lib.json
	cp src/lib/* lib/
	mkdir -p lib
	tsc --incremental -p tsconfig-lib.json
	touch lib

bin: $(BIN_FILES) tsconfig-bin.json
	mkdir -p bin
	tsc --incremental -p tsconfig-bin.json
	touch bin

# Testing

test: bin lib
	npm test

# Downloading AWS metadata

data/policies.js:
	mkdir -p data
	curl https://awsiamconsole.s3.amazonaws.com/iam/assets/js/bundles/policies.js > data/policies.js

data/app.json: data/policies.js bin
	mkdir -p data
	node bin/extract.js

# Library compilation

lib/actions.ts: data/app.json bin
	mkdir -p lib
	node bin/actions.js data/app.json lib/actions.ts

lib/conditions.ts: data/app.json bin
	mkdir -p lib
	node bin/conditions.js data/app.json lib/conditions.ts


# Util

.PHONY: clean-lib clean-bin clean-data clean

clean-lib:
	rm -rf lib

clean-bin:
	rm -rf bin

clean-data:
	rm -rf data

clean: clean-lib clean-bin clean-data
	:
