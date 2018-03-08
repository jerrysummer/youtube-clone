const express = require('express');
const bodyParser = require('body-parser');
const YTSearch = require('youtube-api-search');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// const items = require('../database-mysql');
const items = require('../database-mongo');
require('dotenv').config();



const app = express();

// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/items', function (req, res) {
  items.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});
app.get('/videos', function (req, res) {
  const { API_KEY } = process.env;
  YTSearch({ key: API_KEY, term: 'hp' }, videos => {
    res.json(videos);
  });
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

