#!/usr/bin/env node

const doc = [
	"NAME:",
	"    cistatus v0.1.0 - check if a repo is currently passing on Travis CI.",
	"",
	"USAGE:",
	"    cistatus ([-i|--integer] | [-s|--status] | [-j|--json]) -- <username> <reponame>",
	"    cistatus (-h | --help | --version)",
	"",
	"DESCRIPTION:",
	"",
	"cistatus returns the current travis ci build status of a repository.",
	"",
	"ARGUMENTS:",
	"    <username>              A github username.",
	"    <reponame>              A github reponame.",
	"",
	"OPTIONS:",
	"",
	"    -i --integer            Should the build status be represented by an integer status code? ",
	"                           As is custom, zero represents a successful build and non-zero codes",
	"                           represent failures, errored builds, and other aberrant conditions.",
	"",
	"    -s --status             Should the build status be displayed as a string? ",
	"                            ",
	"    -j --json               Print the status as a json object.",
	"",
	"",
	"    -h --help --version     Display this documentation."
]
.join('\n')





const docopt = require("docopt").docopt
const main   = require("./cistatus.js")

const args = docopt(doc)




main({
	username: args["<username>"],
	reponame: args["<reponame>"],

	integer : args["-i"] || args["--integer"],
	status  : args["-s"] || args["--status"],

	json    : args["-j"] || args["--json"]
})
