var yoyo = require('yo-yo');
var layout = require('../layout');

module.exports = function (userPictures) {
  var element = yoyo

  `<div class="container userpage">
    <div class="row">
      <div class="col s12 m3 offset-m2 l3 offset-l2 center-align">
        <img class="user-avatar" src="${userPictures.avatar}"/>
      </div>
      <div class="col s12 m5 l5 center-align">
        <p class="user-username">${userPictures.username}</p>
      </div>
    </row>
    <div class="row">
      <p>Aqui van las pictures</p>
    </div>
  </div>`;

  return layout(element);
}
