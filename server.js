var express = require('express');

var app = express();

app.get('/', function (request, response) {
  response.send('Hello World!');
});

app.listen(3000, function (error) {
  if(error) {
    return console.log('An error ocurred!'), process.exit(1);
  }

  console.log('Platzigram escuchando en el puerto 3000');
});
