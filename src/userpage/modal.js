var yoyo = require('yo-yo');
var translate = require('../translate');

module.exports = function (photoData) {
  var element = yoyo

  `<div id="picture-modal" class="modal">
    <div class="modal-content">
      <div>
        <img class="responsive-img" id="modal-img" src="${photoData.src}"/>
      </div>
      <div>
        <img class="circle responsive-img" src="${photoData.avatar}"/>
        <p><a id="modal-link" href="/${photoData.username}">${photoData.username}</a></p>
        <hr>
        <p><i class="fa fa-heart" aria-hidden="true"></i> <span>${translate.message('likes', { likes: photoData.likes })}</span></p>
      </div>
    </div>
  </div>`;

  $('#modal-container').on('click', '#modal-link', function(event) {
    $('#picture-modal').closeModal();
  });

  return element;
}
