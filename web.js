var express = require('express');
var fs       = require('fs');

var index_buffer = fs.readFileSync("index.html");
var index = index_buffer.toString('utf-8');


var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send("Changing back some things"+index);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});


var financeurl = function(symbols, columns) {
    return util.format(
	'http://finance.yahoo.com/d/quotes.csv?s=%s&f=%s',
	symbols.join('+'),
	columns);
};
