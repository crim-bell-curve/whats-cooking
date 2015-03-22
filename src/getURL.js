#!/usr/bin/env node

module.exports = getURL;

function getURL(dhall) {
  var jsdom = require('jsdom'),
      d = new Date(),
      t = d.getDate();

  var url;
  if (dhall == 'sadler')
    url = 'https://dining.wm.edu/dining-choices/resident/sadler.html';
  else
    url = 'https://dining.wm.edu/dining-choices/resident/commons-dining-hall.html';
  
  jsdom.env({
    url: url,
    scripts: ['http://code.jquery.com/jquery.js'],
    done: function(errors, window) {
      $ = window.$;
      $('#accordion_20242 a').each(function() {
        if ($(this).attr('href') !== '#') {
          var range = $(this).text().trim().split('-').map(function(date) {
            return Number(date.split('/')[1])
          })
          for (var i = range[0]; i <= range[1]; i++) {
            if (i == t) 
              return 'https://dining.wm.edu/' + $(this).attr('href')
          }
        }
      })
    }
  })
}