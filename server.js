var express = require('express');

var app = express();

app.set('view engine','pug');

app.use(express.static('public'));

app.get('/', function (request, response) {
  response.render('index');
});

app.listen(3000, function (error) {
  if(error) {
    return console.log('An error ocurred!'), process.exit(1);
  }

  console.log('Platzigram escuchando en el puerto 3000');
});
