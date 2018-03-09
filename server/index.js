const express = require('express');
const bodyParser = require('body-parser');
const YTSearch = require('youtube-api-search');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// const items = require('../database-mysql');
// const items = require('../database-mongo');
require('dotenv').config();
var request = require('request');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/../react-client/dist'));


// app.get('/items', function (req, res) {
//   items.selectAll(function(err, data) {
//     if(err) {
//       res.sendStatus(500);
//     } else {
//       res.json(data);
//     }
//   });
// });

app.post('/videos', function (req, res) {
  const term = req.body.payload;
  const { API_KEY } = process.env;
  const URL = "https://www.googleapis.com/youtube/v3/search?" + "key=" + API_KEY + "&q=" + term + "&part=snippet"; 

  request(URL, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(body) 
    } else {
      console.log(error)
    }
  })
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});
