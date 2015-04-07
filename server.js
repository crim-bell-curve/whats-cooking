#!/usr/bin/env node

var express = require('express'),
    app = express(),
    fs = require('fs'),
    now = new Date(),
    today = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'][ now.getDay() ];

app.get('/', function(req, res) {
  fs.readFile(__dirname + '/data/log.json', {encoding:'utf8'}, function(err, data) {
    var log = JSON.parse(data);
    if (today != log.current) {
      res.sendFile(__dirname + '/loading.html');
      var getURL = require('./src/getURL.js'),
          scrape = require('./src/scraper.js');
      ['caf', 'sadler'].forEach(function(hall) {
        getURL(hall, function(err, url) { 
          scrape(hall,url);
        });
      });
    } else {
      res.sendFile(__dirname + '/index.html');
    }
  });
});

app.use(express.static(__dirname + '/'));

var port = process.env.PORT || 5000;
var server = app.listen(port, function() {
  var host = server.address().address;
  console.log('What\'s cooking listening at http://%s:%s', host, port);
});