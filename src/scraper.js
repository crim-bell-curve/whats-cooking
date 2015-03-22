#!/usr/bin/env node

module.exports = scrape

function scrape(dhall, url) {
  var jsdom = require('jsdom'),
      fs = require('fs'),
      now = new Date(),
      today = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'][ now.getDay() ];
  (function getData() {
    jsdom.env({
      url: url,
      scripts: ['http://code.jquery.com/jquery.js'],
      done: function(error, window) {
        var $ = window.$;
        var out = {}
        function getMeal(meal) {
          var ex = [];
          $('#' + today + ' ' + meal).each(function() {
            var all = $(this).text().split('\n').filter(function(i) {
              i = i.trim();
              return i;
            })
            if (all.length) ex.push(all);
          })
          var meal_name = ex[0][0]
          out[meal_name] = {};
          var m = ex;
          m.shift()
          var station;
          m.forEach(function(arr) {
            if (arr.length === 2) {
              station = arr[0].trim()
              out[meal_name][station] = [arr[1].trim()];
            } else {
              out[meal_name][station].push(arr[0].trim())
            }
          });
        }
        ['.brk', '.lun', '.din'].forEach(function(m) {
          if (((today == 'saturday') || (today == 'sunday')) && (m == '.brk'))
            return;
          getMeal(m);
        });
        fs.writeFileSync(__dirname + '/../data/' + dhall + '.js', 'var caf = ' + JSON.stringify(out));
        //fs.writeFileSync(__dirname + '/../data/log.json', JSON.stringify({current: today}));
      }
    })
  })();
}