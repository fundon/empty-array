MOCHA_OPTS = --check-leaks

node_modules: package.json
	@npm install

test: node_modules
	@NODE_ENV=test ./node_modules/mocha/bin/mocha \
		--require should \
		$(MOCHA_OPTS)

.PHONY: test
