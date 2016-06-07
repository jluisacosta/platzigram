var yoyo = require('yo-yo');
var layout = require('../layout');

module.exports = function () {
  var element = yoyo

  `<div class="container userpage">
    <div class="row">
      <div class="col s12 m3 offset-m2 l3 offset-l2 center-align">
        <img class="user-avatar" src="https://avatars2.githubusercontent.com/u/6529799?v=3&s=460"/>
      </div>
      <div class="col s12 m5 l5 center-align">
        <p class="user-username">jluisacosta</p>
      </div>
    </row>
    <div class="row">
      <p>Aqui van las pictures</p>
    </div>
  </div>`;

  return layout(element);
}
