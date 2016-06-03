var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');
var request = require('superagent');
var header = require('../header');
var axios = require('axios');

page('/', header, asyncLoad, function (ctx, next) {
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

function loadPicturesAxios(ctx, next) {
  axios
    .get('/api/pictures')
    .then( function (response) {
      ctx.pictures = response.data;
      next();
    })
    .catch( function (error) {
      console.log(error);
    });
}


function loadPicturesFetch(ctx, next) {
  fetch('/api/pictures')
  .then( function (response) {
    return response.json();
  })
  .then( function (pictures) {
    ctx.pictures = pictures;
    next();
  })
  .catch( function (error) {
    console.log(error);
  });
}


async function asyncLoad(ctx, next) {
  try {
    ctx.pictures = await fetch('/api/pictures').then(response => response.json());
    next();
  } catch (error) {
    return console.log(error);
  }
}
