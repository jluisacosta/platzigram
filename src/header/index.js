var yoyo = require('yo-yo');
var translate = require('../translate');
var empty = require('empty-element');

var element = yoyo

`<nav class="header">
  <div class="nav-wrapper">
    <a href="/" class="brand-logo platzigram">Platzigram</a>
    <ul class="right">
      <li>
        <a href="#" class="btn btn-large btn-flat dropdown-button" data-activates="drop-user">
          <i class="fa fa-user" aria-hidden="true"></i>
        </a>
        <ul id="drop-user" class="right dropdown-content">
          <li><a href="#">${translate.message('logout')}</a></li>
        </ul>
      </li>
    </ul>
  </div>
</nav>`;

module.exports = function header (ctx, next) {
  var container = document.getElementById('header-container');

  empty(container).appendChild(element);
  next();
}
