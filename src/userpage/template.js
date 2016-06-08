var yoyo = require('yo-yo');
var layout = require('../layout');
var thumbnail = require('../thumbnail');

module.exports = function (userPictures) {
  var element = yoyo

  `<div class="container userpage">
    <div class="row">
      <div class="col s12 m10 offset-m1 l8 offset-l2">
        <div class="row hide-on-small-only">
          <div class="col s12 m6 l6 right-align">
            <img class="user-avatar" src="${userPictures.avatar}"/>
          </div>
          <div class="col s12 m6 l6 left-align">
            <p class="user-username">${userPictures.username}</p>
          </div>
        </div>
        <div class="row hide-on-med-and-up">
          <div class="col s12 m6 l6 center-align">
            <img class="user-avatar" src="${userPictures.avatar}"/>
          </div>
          <div class="col s12 m6 l6 center-align">
            <p class="user-username">${userPictures.username}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      ${  userPictures.pictures.map( function (picture) {
            return thumbnail(picture);
          }) }
    </div>
  </div>`;

  return layout(element);
}
