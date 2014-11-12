#!/usr/bin/env node

const Travis = require('travis-ci');





const utils = {
	stop: function (err) {
		process.stderr.write('an error occurred: ' + JSON.stringify(err) + '\n')
	},

	statusLogger: {
		integer: function (status) {
			console.log(status === 'passed'? 0 : 1)
		},
		status: function (status) {
			console.log(status)
		},
		json: function (status) {

			console.log( JSON.stringify({
				status:     status,
				statusCode: status === 'passed' ? 0 : 1
			}) )

		}
	}
}

const getRepo = function (username, reponame, callback) {

	const travis = new Travis({version: '2.0.0', pro: false})

	travis.repos(username, reponame).get(function (err, res) {
		err? utils.stop(err): callback(res)
	})

}

const main = function (args) {

	const logStatus =
		args.integer?
			utils.statusLogger.integer :
		args.json?
			utils.statusLogger.json :
			utils.statusLogger.status

	getRepo(args.username, args.reponame, function (repo) {
		logStatus(repo.repo.last_build_state)
	})

}





module.exports = main
