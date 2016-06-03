var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');
var request = require('superagent');
var header = require('../header');

page('/', header, loadPictures, function (ctx, next) {
  var main = document.getElementById('main-container');

  title('Platzigram');
  empty(main).appendChild(template(ctx.pictures));
});

function loadPictures(ctx, next) {
  request
    .get('/api/pictures')
    .end( function (error, response) {
      if(error) {
        return console.log(error);
      }

      ctx.pictures = response.body;
      next();
    });
}
