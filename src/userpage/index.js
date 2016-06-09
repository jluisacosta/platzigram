var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');
var header = require('../header');

page('/:username', header, asyncLoadUserPage, function (ctx, next) {
  var main = document.getElementById('main-container');

  title('Platzigram - (@'+ctx.params.username+')');
  empty(main).appendChild(template(ctx.userPictures));
});

page('/:username/picture/:id', header, function (ctx, next) {
  var main = document.getElementById('main-container');

  if(document.getElementById('userpage')) {
    $('#modal1').openModal();
  }
  else {
    console.log('Carga pagina de usuario y dispara modal');
  }
});

async function asyncLoadUserPage(ctx, next) {
  try {
    ctx.userPictures = await fetch('/api/u/'+ctx.params.username).then(response => response.json());
    next();
  } catch (error) {
    return console.log(error);
  }
}
