var yoyo = require('yo-yo');
var translate = require('../translate');

module.exports = function pictureCard(picture) {
  var element;

  function render(renderPicture) {
    return yoyo

    `<div class="card ${renderPicture.liked ? 'liked' : 'disliked'}">
      <div class="card-image">
        <img class="activator" src="${renderPicture.url}">
      </div>
      <div class="card-content">
        <a href="/${renderPicture.user.username}" class="card-title">
          <img src="${renderPicture.user.avatar}" class="avatar"/>
          <span class="username">${renderPicture.user.username}</span>
        </a>
        <small class="right time">${translate.date.format(renderPicture.createdAt)}</small>
        <p>
          <a class="left" href="#" onclick=${like.bind(null, true)}><i class="fa fa-heart-o" aria-hidden="true"></i></a>
          <a class="left" href="#" onclick=${like.bind(null, false)}><i class="fa fa-heart" aria-hidden="true"></i></a>
          <span class="left likes">${translate.message('likes', { likes: renderPicture.likes })}</span>
        </p>
      </div>
    </div>`;
  }

  function like(liked) {
    var newElement;

    picture.liked = liked;
    picture.likes += liked ? 1 : -1;
    newElement = render(picture);
    yoyo.update(element, newElement);
    return false;
  }

  element = render(picture);
  return element;
}
