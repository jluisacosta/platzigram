var yoyo = require('yo-yo');
var empty = require('empty-element');

var spinnerTemplate = yoyo`<div class="loader">Loading...</div>`;

module.exports = {
  spinner: function (ctx, next) {
    var main = document.getElementById('main-container');

    empty(main).appendChild(spinnerTemplate);
    next();
  }
};
