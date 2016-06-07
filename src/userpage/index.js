var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');
var header = require('../header');

page('/:username', header, function (ctx, next) {
  var main = document.getElementById('main-container');
  
  title('Platzigram - (@'+ctx.params.username+')');
  empty(main).appendChild(template());
});
