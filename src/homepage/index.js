var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');

page('/', function (ctx, next) {
  var main = document.getElementById('main-container');
  var pictures = [
    {
      user: {
        username: 'jluisacosta',
        avatar: 'https://avatars2.githubusercontent.com/u/6529799?v=3&s=460'
      },
      url: 'http://materializecss.com/images/office.jpg',
      likes: 0,
      liked: false,
      createdAt: new Date()
    },
    {
      user: {
        username: 'jluisacosta',
        avatar: 'https://avatars2.githubusercontent.com/u/6529799?v=3&s=460'
      },
      url: 'http://materializecss.com/images/office.jpg',
      likes: 2,
      liked: true,
      createdAt: new Date().setDate(new Date().getDate()-10)
    }
  ];

  title('Platzigram');
  empty(main).appendChild(template(pictures));
});
