#!/usr/bin/env sh

sudo npm-install -g travis-ci

rm -rf ~/cistatus
git clone https://github.com/rgrannell1/ci-status.git ~/cistatus

echo alias cistatus='node "~/cistatus/lib/docopt-cistatus.js"' >> ~/.bashrc && . ~/.bashrc
