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
  putImagesInSquareFrame();
  window.onresize = putImagesInSquareFrame;
}

function putImagesInSquareFrame() {
  var $images = $('.Thumbnail-image');

  $images.each( function() {
    var $image = $(this);

    if(!this.complete){
      $image.on('load', function(event) {
        squareThumbnail($image);
      });
    }
    else {
      squareThumbnail($image);
    }
  });
}

function squareThumbnail($image) {
  var $imageParent = $image.parent();
  var parentWidth = $imageParent.width();

  $imageParent.height(parentWidth);

  if($image.width() >= $image.height()) {
    $image.height(parentWidth);
    $image.css('top', 0);
    $image.css('left', -(($image.width()-parentWidth)/2));
  }
  else  {
    $image.width(parentWidth);
    $image.css('left', 0);
    $image.css('top', -(($image.height()-parentWidth)/2));
  }
}

function triggerModal(photoData) {
  var modalContainer = document.getElementById('modal-container');
  var $overlay, closeBtn;

  empty(modalContainer).appendChild(modal(photoData));
  $('#picture-modal').openModal();

  $('#modal-img').on('load', function(event) {
    var $img = $(this);

    if($img.height() > $img.width()) {
      $img.height($('#picture-modal').height());
    }

  });

  $overlay = $('.lean-overlay');
  closeBtn = '<div class="btn-x-container"><i class="fa fa-times" id="btn-x" aria-hidden="true"></i></div>';

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
