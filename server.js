#!/usr/bin/env node

var app = require('express')(),
    fs = require('fs'),
    now = new Date(),
    today = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'][ now.getDay() ];

var log = JSON.parse(fs.readFileSync(__dirname + '/data/log.json'));

if (today != log.current) {
  var getURL = require('./src/getURL.js'),
      scrape = require('./src/scraper.js');
  scrape('sadler', getURL('sadler'));
  scrape('caf', getURL('caf'));
}

app.use(express.static(__dirname + '/'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

var port = process.env.PORT || 5000,
var server = app.listen(port, function() {
  var host = server.address().address;
  console.log('What\' cooking listening at http://%s:%s', host, port);
});