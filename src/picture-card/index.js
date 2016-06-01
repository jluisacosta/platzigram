var yoyo = require('yo-yo');

module.exports = function (picture) {
  return yoyo

  `<div class="card">
    <div class="card-image">
      <img class="activator" src="${picture.url}">
    </div>
    <div class="card-content">
      <a href="/user/${picture.user.username}" class="card-title">
        <img src="${picture.user.avatar}" class="avatar"/>
        <span class="username">${picture.user.username}</span>
      </a>
      <small class="right time">Hace 1 día</small>
      <p>
        <a class="left" href="#"><i class="fa fa-heart-o" aria-hidden="true"></i></a>
        <span class="left likes">${picture.likes} Me Gusta</span>
      </p>
    </div>
  </div>`;
}
