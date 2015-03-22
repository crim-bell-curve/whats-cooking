(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (__dirname){
window.addEventListener('load', function() {
  var fs = require('fs'),
      now = new Date(),
      today = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'][ now.getDay() ];

  var sadler = JSON.parse(fs.readFileSync('./data/sadler.json', 'utf8')),
      caf = JSON.parse(fs.readFileSync('./data/caf.json', 'utf8'));

  d3.select('#day')
    .text(today)

  function display(menu) {
    var content = d3.select('#content');
    for (var meal in menu) {
      content.append('div').attr('class', 'meal').attr('id', meal);
      var m = d3.select('#' + meal)
      m.append('h4').text(meal);
      for (var station in menu[meal]) {
        stat = station.replace(/\//g, '');
        m.append('div').attr('class', meal).attr('id', stat)
        var s = d3.select('#' + stat).append('h6').text(station);
        menu[meal][station].forEach(function(item) {
          s.append('p').text(item);
        });
      }
    }
  }
});

}).call(this,"/")
},{"fs":2}],2:[function(require,module,exports){

},{}]},{},[1]);