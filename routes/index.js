var express = require('express');
var router = express.Router();
/* Enable to grab data from the data.JSON file */
var appdata = require('../data.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  var myArtwork = [];
  var myArtists = [];

  //pass all the speakers information
  myArtists = appdata.speakers;
  appdata.speakers.forEach(function(item){
    /*Populate the array with the artwork information from the JSON file*/
    myArtwork = myArtwork.concat(item.artwork)
  });
  res.render('index', {
    title: 'Rouxmeet',
    artwork: myArtwork,
    artists: myArtists,
    page: 'home'
   });
});
/* GET speakers page. */
router.get('/speakers', function(req, res, next) {
  var myArtwork = [];
  var myArtists = [];

  //pass all the speakers information
  myArtists = appdata.speakers;
  appdata.speakers.forEach(function(item){
    /*Populate the array with the artwork information from the JSON file*/
    myArtwork = myArtwork.concat(item.artwork)
  });
  res.render('speakers', {
    title: 'Speakers',
    artwork: myArtwork,
    artists: myArtists,
    page: 'artistList'
   });
});

/* GET speakers page with specific speakerid(Details) ie the shortname according to the data.JSON file  */
router.get('/speakers/:speakerid', function(req, res, next) {
  var myArtwork = [];
  var myArtists = [];

  appdata.speakers.forEach(function(item){
    //let's confirm if the speakerid matches, then we load his artwork
    if (item.shortname == req.params.speakerid){
      //load speaker information according to his ID
      myArtists.push(item);
      /*Populate the array with the artwork information from the JSON file*/
      myArtwork = myArtwork.concat(item.artwork)
    }
  });
  res.render('speakers', {
    title: 'Speakers',
    artwork: myArtwork,
    artists: myArtists,
    page: 'artistDetail'
   });
});

module.exports = router;
