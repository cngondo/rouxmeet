var express = require('express');
var router = express.Router();
/* Enable to grab data from the data.JSON file */
var appdata = require('../data.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  var myArtwork = [];
  appdata.speakers.forEach(function(item){
    /*Populate the array with the artwork information from the JSON file*/
    myArtwork = myArtwork.concat(item.artwork)
  });
  res.render('index', {
    title: 'Rouxmeet',
    artwork: myArtwork
   });
});

module.exports = router;
