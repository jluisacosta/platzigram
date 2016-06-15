var yoyo = require('yo-yo');
var translate = require('../translate');

module.exports = function (photoData) {
  console.log(photoData);
  return yoyo

  `<div id="picture-modal" class="modal">
    <div class="modal-content">
      <div>
        <img class="responsive-img" src="${photoData.src}"/>
      </div>
      <div>
        <img class="circle responsive-img" src="${photoData.avatar}"/>
        <p><a href="/${photoData.username}">${photoData.username}</a></p>
        <hr>
        <p><i class="fa fa-heart" aria-hidden="true"></i> <span>${translate.message('likes', { likes: photoData.likes })}</span></p>
      </div>
    </div>
  </div>`;
}
