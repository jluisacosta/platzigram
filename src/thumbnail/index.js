var yoyo = require('yo-yo');
var translate = require('../translate');

module.exports = function thumbnail(username, picture) {
  return yoyo

  `<div class="col s12 m6 l4 center-align thumbnail-container">
    <a href="/${username}/pictures/${picture.id}">
      <div class="Thumbnail">
        <img class="Thumbnail-image" src="${picture.src}"/>
        <div class="Thumbnail-mask">
          <div class="Thumbnail-frame"></div>
          <div class="Thumbnail-text">
            <p><i class="fa fa-heart" aria-hidden="true"></i> <span>${translate.message('likes', { likes: picture.likes })}</span></p>
          </div>
        </div>
      </div>
    </a>
  </div>`;
}
