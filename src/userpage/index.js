var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');
var header = require('../header');


page('/:username', header, asyncGetUserData, function (ctx, next) {
  loadUserPage(ctx.userData);
});

page('/:username/picture/:id', header, validate, asyncGetUserData, function (ctx, next) {
  var $overlay;

  if(!ctx.userPageExist) {
    loadUserPage(ctx.userData);
  }

  $('#picture-modal').openModal();
  $overlay = $('.lean-overlay');

  $overlay.click(function(event) {
    history.pushState(null, null, '/'+ctx.params.username);
  });

  $overlay.html('<div class="btn-x-container"><i class="fa fa-times" id="btn-x" aria-hidden="true"></i></div>');
});

function loadUserPage(userData) {
  var main = document.getElementById('main-container');

  title('Platzigram - (@'+userData.username+')');
  empty(main).appendChild(template(userData));
}

function validate(ctx, next) {
  if(document.getElementById('userpage')) {
    ctx.userPageExist = true;
  }

  next();
}

async function asyncGetUserData(ctx, next) {
    try {
      if(!ctx.userPageExist) {
        ctx.userData = await fetch('/api/u/'+ctx.params.username).then(response => response.json());
      }
      next();
    } catch (error) {
      return console.log(error);
    }
}
