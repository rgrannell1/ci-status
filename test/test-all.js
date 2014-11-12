#!/usr/bin/env node

const utils   = require("../lib/cistatus.js").utils
const main    = require("../lib/cistatus.js").main
const getRepo = require("../lib/cistatus.js").getRepo





console.log("* formatting builds as an integer works.")

	console.assert(
		utils.formatStatus.integer('passed') === 0,
		"** 'passed' status was non-zero.")

	console.assert(
		utils.formatStatus.integer('failed') !== 0,
		"** 'failed' status was zero.")





console.log("* status is the identity function.")

	const _json = utils.formatStatus.json

	console.assert(
		utils.formatStatus.status("passed") === "passed",
		"** not identity.")

	console.assert(
		utils.formatStatus.status("failed") === "failed",
		"** not identity.")





console.log("* json encoder has correct fields and values.")

	console.assert(
		_json('passed').hasOwnProperty('status') && _json('passed').hasOwnProperty('statusCode'),
		"** missing fields in utils.formatStatus.json.")

	console.assert(
		_json('passed').status === 'passed',
		"** missing fields in utils.formatStatus.json.")

	console.assert(
		_json('passed').statusCode === 0,
		"** missing fields in utils.formatStatus.json.")

	console.assert(
		_json('failed').status === 'failed',
		"** missing fields in utils.formatStatus.json.")

	console.assert(
		_json('failed').statusCode === 1,
		"** missing fields in utils.formatStatus.json.")





console.log("* getting repository details from travis works")

	getRepo('rgrannell1', 'kea', function (repo) {

		console.assert(
			repo.repo.hasOwnProperty('description'),
			"** repo missing field.")

		console.assert(
			repo.repo.hasOwnProperty('github_language'),
			"** repo missing field.")

		console.assert(
			repo.repo.hasOwnProperty('last_build_state'),
			"** repo missing field.")

	})

