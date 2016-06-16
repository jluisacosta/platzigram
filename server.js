/* Application variables */
var express = require('express');
var app = express();


/* Storage */
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


/* App initialization */
app.set('view engine','pug');

app.use(express.static('public'));


/* Request routes */
app.get('/', function (request, response) {
  response.render('index', { title: 'Platzigram' });
});

app.get('/signup', function (request, response) {
  response.render('index', { title: 'Platzigram - Signup' });
});

app.get('/signin', function (request, response) {
  response.render('index', { title: 'Platzigram - Signin' });
});

app.get('/:username', function (request, response) {
  var username = request.params.username;

  response.render('index', { title: 'Platzigram' });
});

app.get('/:username/pictures/:id', function (request, response) {
  response.render('index', { title: 'Platzigram' });
});


/* API Simulation */
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
  },2000);
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
  var user = {
    username: 'jluisacosta',
    avatar: 'https://avatars2.githubusercontent.com/u/6529799?v=3&s=460',
    pictures: [
      {
        id:1,
        src:'http://www.codeinstitute.net/wp-content/uploads/2015/04/students-and-laptops-500x500.jpg',
        likes:3
      },
      {
        id:2,
        src:'http://beachcoders.com/wp-content/uploads/2013/12/bootcamp_history-90187a42aab5ea7120cb0645774b8f4a-400x400.jpg',
        likes:0
      },
      {
        id:3,
        src:'http://i.imgur.com/1zG5MEI.png?1',
        likes:1
      },
      {
        id:4,
        src:'http://www.uscmed.com/wp-content/uploads/2013/06/medical-coding.jpeg',
        likes:2
      },
      {
        id:5,
        src:'https://wallsheaven.com/photos/E85222367/400/coding-and-programming-flat-illustration.jpg',
        likes:100
      },
      {
        id:6,
        src:'http://www.cta.tech/CorporateSite/media/blog/images/2015/coding1.jpg',
        likes:21
      },
      {
        id:7,
        src:'https://pbs.twimg.com/media/ChI9VeUWMAEjFb8.jpg',
        likes:7
      },
      {
        id:8,
        src:'https://yt3.ggpht.com/-shUq8gV-uh4/AAAAAAAAAAI/AAAAAAAAAAA/x6vLYh8lQMs/s900-c-k-no-rj-c0xffffff/photo.jpg',
        likes:27
      }
    ]
  };

  response.send(user);
});

app.get('/api/u/:username/p/:id', function (request, response) {
  var user = {
    username: 'jluisacosta',
    avatar: 'https://avatars2.githubusercontent.com/u/6529799?v=3&s=460',
    pictures: [
      {
        id:1,
        src:'http://www.codeinstitute.net/wp-content/uploads/2015/04/students-and-laptops-500x500.jpg',
        likes:3
      },
      {
        id:2,
        src:'http://beachcoders.com/wp-content/uploads/2013/12/bootcamp_history-90187a42aab5ea7120cb0645774b8f4a-400x400.jpg',
        likes:0
      },
      {
        id:3,
        src:'http://i.imgur.com/1zG5MEI.png?1',
        likes:1
      },
      {
        id:4,
        src:'http://www.uscmed.com/wp-content/uploads/2013/06/medical-coding.jpeg',
        likes:2
      },
      {
        id:5,
        src:'https://wallsheaven.com/photos/E85222367/400/coding-and-programming-flat-illustration.jpg',
        likes:100
      },
      {
        id:6,
        src:'http://www.cta.tech/CorporateSite/media/blog/images/2015/coding1.jpg',
        likes:21
      },
      {
        id:7,
        src:'https://pbs.twimg.com/media/ChI9VeUWMAEjFb8.jpg',
        likes:7
      },
      {
        id:8,
        src:'https://yt3.ggpht.com/-shUq8gV-uh4/AAAAAAAAAAI/AAAAAAAAAAA/x6vLYh8lQMs/s900-c-k-no-rj-c0xffffff/photo.jpg',
        likes:27
      }
    ]
  };

  var photo = user.pictures.find(function (photo) {
    return photo.id == request.params.id;
  });

  var photoData = {
    id: photo.id,
    username: user.username,
    avatar: user.avatar,
    src: photo.src,
    likes: photo.likes
  };

  response.send(photoData);

});

/* Server run */
app.listen(3000, function (error) {
  if(error) {
    return console.log('An error ocurred!'), process.exit(1);
  }

  console.log('Platzigram listening on port : 3000');
});
