var express = require('express');
var app = express();
const PORT = process.env.PORT || 3000;

app.get('/', function(req, res) {
  res.send('Welcome!');
});

app.listen(PORT, function() {
  console.log('Express server started on port ' + PORT);
});