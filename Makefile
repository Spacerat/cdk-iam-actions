# Downloading AWS metadata

bin/policies.js:
	mkdir -p bin
	curl https://awsiamconsole.s3.amazonaws.com/iam/assets/js/bundles/policies.js > bin/policies.js

bin/app.json: bin/policies.js bin/extract.js
	node bin/extract.js

# Library compilation

lib/index.ts:
	mkdir -p lib
	cp src/lib/index.ts lib/index.ts

lib/actions.ts: bin/app.json bin/actions.js bin/serviceMap.js bin/parse.js bin/render.js
	mkdir -p lib
	node bin/actions.js bin/app.json lib/actions.ts

lib/conditions.ts: bin/app.json bin/conditions.js bin/serviceMap.js bin/parse.js bin/render.js
	mkdir -p lib
	node bin/conditions.js bin/app.json lib/conditions.ts

# Typescript compilation

bin/%.js: src/bin/%.ts tsconfig-bin.json
	mkdir -p bin
	tsc -p tsconfig-bin.json

lib/%.js: lib/%.ts tsconfig-lib.json
	mkdir -p lib
	tsc -p tsconfig-lib.json

.PHONY: lib

lib : lib/actions.js lib/conditions.js lib/index.js
	:

# Util

clean:
	rm -rf bin lib
