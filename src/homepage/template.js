var yoyo = require('yo-yo');
var layout = require('../layout');
var pictureCard = require('../picture-card');

module.exports = function (pictures) {
  var element = yoyo

  `<div class="container timeline">
    <div class="row">
      <div class="col s12 m10 offset-m1 l6 offset-l3">
        ${  pictures.map( function (picture) {
              return pictureCard(picture);
            }) }
      </div>
    </div>
  </div>`;

  return layout(element);
}
