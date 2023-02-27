#
# Makefile
# Anup choudhary 2023-02-16

NODE_VERSION := $(shell node -v 2>/dev/null)
NPM_VERSION := $(shell npm -v 2>/dev/null)

envsetup:
ifndef NODE_VERSION
	@echo "Installing npm and node..."
	@apt-get install npm -y
	ln -s /usr/bin/nodejs /usr/bin/node
	$(MAKE) updatenode
else
ifneq ($(NODE_VERSION), $(REQUIRED_VERSION))
	$(MAKE) updatenode
endif
endif
ifndef YARN_VERSION
	@echo "Installing yarn..."
	@npm install yarn -g
endif
	@node -v | xargs echo node version
	@npm -v | xargs echo npm version
	@yarn --version | xargs echo yarn version
	@echo "Node, npm and yarn are installed!"
	@echo "Rebuilding node-sass"
	@npm rebuild node-sass	
	@echo "--------------------------------------------------------------"



install:
	@echo "Running npm install on the project"
	@npm install
	@echo "-----------npm install done---------"

build:
	@echo "-------------Starting Build Prod---------------------"
	@echo "Building prod profile"
	@npm run prod:build

prod: install build

# vim:ft=make
#
