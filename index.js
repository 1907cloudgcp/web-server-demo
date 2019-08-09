let express = require('express')
let https = require('https')
let fs = require('fs')


let app = express()
//this is for setting up the ssl server
let options = {
    key: fs.readFileSync(process.env['SERVER_KEY']),
    cert: fs.readFileSync(process.env['SERVER_CERT']),
    passphrase: process.env['SERVER_PASS']
}

app.use('/', (req, res)=>{
	res.json('Hello world')
})

let listener = https.createServer(options, app).listen(4000, ()=>{
	console.log('App is Live')
})




