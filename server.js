var express = require('express');
var multer = require('multer');
var ext = require('file-extension');
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (request, file, cb) {
    cb(null, + Date.now() + '.' + ext(file.originalname))
  }
});
var upload = multer({ storage: storage }).single('picture');
var app = express();

app.set('view engine','pug');

app.use(express.static('public'));

app.get('/', function (request, response) {
  response.render('index', { title: 'Platzigram' });
});

app.get('/signup', function (request, response) {
  response.render('index', { title: 'Platzigram - Signup' });
});

app.get('/signin', function (request, response) {
  response.render('index', { title: 'Platzigram - Signin' });
});

app.get('/api/pictures', function (request, response) {
  var pictures = [
    {
      user: {
        username: 'jluisacosta',
        avatar: 'https://avatars2.githubusercontent.com/u/6529799?v=3&s=460'
      },
      url: 'http://materializecss.com/images/office.jpg',
      likes: 0,
      liked: false,
      createdAt: new Date().getTime()
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

  setTimeout(function () {
    response.send(pictures);
  },0);
})

app.post('/api/pictures', function (request, response) {
  upload(request, response, function (error) {
    if(error) {
      return response.send(500, "Error uploading file!");
    }

    response.send('File uploaded');
  });
});


app.get('/api/u/:username', function (request, response) {
  var user = [
    {
      username: 'jluisacosta',
      avatar: 'https://avatars2.githubusercontent.com/u/6529799?v=3&s=460'
    }
  ];

  response.send(user);
});

app.get('/:username', function (request, response) {
  var username = request.params.username;
  response.render('index', { title: 'Platzigram - (@'+username+')' });
});

app.listen(3000, function (error) {
  if(error) {
    return console.log('An error ocurred!'), process.exit(1);
  }

  console.log('Platzigram listening on port : 3000');
});
