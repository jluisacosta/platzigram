var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');
var header = require('../header');
var modal = require('./modal');


page('/:username', header, asyncGetUserData, function (ctx, next) {
  loadUserPage(ctx.userData);
});

page('/:username/pictures/:id', header, validate, asyncGetUserData, asyncGetPhotoData, function (ctx, next) {
  if(!ctx.userPageExist) {
    loadUserPage(ctx.userData);
  }

  triggerModal(ctx.photoData);
});

function loadUserPage(userData) {
  var main = document.getElementById('main-container');

  title(`Platzigram - (@${userData.username})`);
  empty(main).appendChild(template(userData));
}

function triggerModal(photoData) {
  var modalContainer = document.getElementById('modal-container');
  empty(modalContainer).appendChild(modal(photoData));

  $('#picture-modal').openModal();

  var $overlay = $('.lean-overlay');
  var closeBtn = '<div class="btn-x-container"><i class="fa fa-times" id="btn-x" aria-hidden="true"></i></div>';

  $overlay.html(closeBtn);
  $overlay.click(function(event) {
    history.pushState({ path: `/${photoData.username}` }, null, `/${photoData.username}`);
  });
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
        ctx.userData = await fetch(`/api/u/${ctx.params.username}`)
          .then(response => response.json());
      }
      next();
    } catch (error) {
      return console.log(error);
    }
}

async function asyncGetPhotoData(ctx, next) {
    try {
      ctx.photoData = await fetch(`/api/u/${ctx.params.username}/p/${ctx.params.id}`)
        .then(response => response.json());
      next();
    } catch (error) {
      return console.log(error);
    }
}
