var yoyo = require('yo-yo');

module.exports = function layout(content) {
  return yoyo

  `<div>
    <div class="content">
      ${content}
    </div>
  </div>`;
}
