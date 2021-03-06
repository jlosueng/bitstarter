var express = require('express');
var fs = require('fs');

fs.readFile('index.html', function(err, data) {
   if (err) {
      return console.log(err);
   }
   results = data.toString();
});

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(results);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
