var MESSAGES = { 'en-US': require('./en-US'), es: require('./es')  };
var IntlRelativeFormat;
var IntlMessageFormat;
var locale = localStorage.locale || 'en-US';

if(!window.Intl) {
  window.Intl = require('intl');
  require('intl/locale-data/jsonp/en-US.js');
  require('intl/locale-data/jsonp/es.js');
}

IntlMessageFormat = require('intl-messageformat');
IntlRelativeFormat = window.IntlRelativeFormat = require('intl-relativeformat');
require('intl-relativeformat/dist/locale-data/en.js');
require('intl-relativeformat/dist/locale-data/es.js');

module.exports = {
  message: function (text, options) {
    var msg;

    options = options || {};
    msg = new IntlMessageFormat(MESSAGES[locale][text], locale, null);

    return msg.format(options);
  },
  date: new IntlRelativeFormat(locale)
}
