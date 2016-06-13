var yoyo = require('yo-yo');

module.exports = function (photoData) {
  console.log(photoData);
  return yoyo

  `<div id="picture-modal" class="modal">
    <div class="modal-content">
      <h4>Modal Header</h4>
      <p>${photoData.username}</p>
    </div>
  </div>`;
}
