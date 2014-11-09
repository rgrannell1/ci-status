#!/usr/bin/env node

const express = require('express')




const app = express()
const port = process.env.PORT || 8110




const sendStatus = function (status, res) {
	res.send(status.toString())
}





const router = express.Router()





router.get('/:username/:repo/', function (req, res) {

	const username = req.params.username
	const repo     = req.params.repo

	sendStatus(0, res)

})





app.use('/', router)
app.listen(port)
