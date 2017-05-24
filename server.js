var express = require('express');

var app = express();

app.get ('/', function (req ,res){
	res.send('Hello World')
})

app.get ('/welcome', function (req ,res){
	res.send('welcome to Demo')
})

app.listen(3000, function (){
	console.log('Listing at port 3000')
})