#!/usr/bin/env node

const Travis = require('travis-ci');





const utils = {
	stop: function (err) {
		process.stderr.write('an error occurred: ' + JSON.stringify(err) + '\n')
	},

	formatStatus: {
		integer: function (status) {
			return status === 'passed'? 0 : 1
		},
		status: function (status) {
			return status
		},
		json: function (status) {

			return {
				status:     status,
				statusCode: status === 'passed' ? 0 : 1
			}

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

	const formatStatus =
		args.integer?
			utils.status.integer :
		args.json?
			utils.status.json :
			utils.status.status

	getRepo(args.username, args.reponame, function (repo) {
		console.log(formatStatus(repo.repo.last_build_state))
	})

}





module.exports = {
	main:    main,
	getRepo: getRepo,
	utils:   utils
}
