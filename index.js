var express = require("express");
var app = express();

app.get('/', function(req, res) {
	console.log("Hello API");
	res.send('Hello, the API is probably at /rest');
});

var api_rest = require('./app/api_rest');
app.all('/rest/:query?', api_rest.call);


var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
	console.log("Listening on " + port);
});