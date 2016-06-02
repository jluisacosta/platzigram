var yoyo = require('yo-yo');
var translate = require('../translate');

var element = yoyo

`<footer class="site-footer">
  <div class="container">
    <div class="row">
      <div class="col s12 l3 center-align"><a href="#" data-activates="dropdown1" class="dropdown-button btn btn-flat">${translate.message('language')}</a>
        <ul id="dropdown1" class="dropdown-content">
          <li><a href="#" onclick=${changeLanguage.bind(null, 'es')}>${translate.message('spanish')}</a></li>
          <li><a href="#" onclick=${changeLanguage.bind(null, 'en-US')}>${translate.message('english')}</a></li>
        </ul>
      </div>
      <div class="col s12 l3 push-l6 center-align">© 2016 Platzigram</div>
    </div>
  </div>
</footer>`;

function changeLanguage(locale) {
  localStorage.locale = locale;
  location.reload();
}

document.body.appendChild(element);
