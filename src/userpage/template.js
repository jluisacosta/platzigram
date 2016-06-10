var yoyo = require('yo-yo');
var layout = require('../layout');
var thumbnail = require('../thumbnail');

module.exports = function (userData) {
  var element = yoyo

  `<div class="container" id="userpage">
    <div class="row">
      <div class="col s12 m10 offset-m1 l8 offset-l2">
        <div class="row hide-on-small-only">
          <div class="col s12 m6 l6 right-align">
            <img class="user-avatar" src="${userData.avatar}"/>
          </div>
          <div class="col s12 m6 l6 left-align">
            <p class="user-username">${userData.username}</p>
          </div>
        </div>
        <div class="row hide-on-med-and-up">
          <div class="col s12 m6 l6 center-align">
            <img class="user-avatar" src="${userData.avatar}"/>
          </div>
          <div class="col s12 m6 l6 center-align">
            <p class="user-username">${userData.username}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      ${  userData.pictures.map( function (picture) {
            return thumbnail(userData.username, picture);
          }) }
    </div>

    <div id="picture-modal" class="modal">
      <div class="modal-content">
        <h4>Modal Header</h4>
        <p>A bunch of text</p>
      </div>
    </div>

  </div>`;

  return layout(element);
}
