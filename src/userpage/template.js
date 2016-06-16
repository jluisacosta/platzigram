var yoyo = require('yo-yo');
var layout = require('../layout');
var thumbnail = require('./thumbnail');

module.exports = function (userData) {
  var element = yoyo

  `<div class="container" id="userpage">
    <div class="row">
      <div class="col s12 m4 l4 center-align">
        <img class="user-avatar" src="${userData.avatar}"/>
      </div>
      <div class="col s12 m8 l8">
        <h1 class="user-username left-align hide-on-small-only">${userData.username}</h1>
        <h1 class="user-username center-align hide-on-med-and-up">${userData.username}</h1>
        <p class="minibio">Enthusiast Web Developer who loves to learn new technologies to create the future of internet. Passionate of coding, soccer and taste a good beer.</p>
        <p><strong>${userData.pictures.length}</strong> posts</p>
      </div>
    </div>
    <div class="row">
      ${  userData.pictures.map( function (picture) {
            return thumbnail(userData.username, picture);
          }) }
    </div>
  </div>`;

  return layout(element);
}
