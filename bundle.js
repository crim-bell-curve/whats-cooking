(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (__dirname){
window.addEventListener('load', function() {
  var fs = require('fs'),
      now = new Date(),
      today = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'][ now.getDay() ];
  
  var sadler = fs.readFileSync(__dirname + '/data/sadler.json', {encoding: 'utf8'}),
      caf = fs.readFileSync(__dirname + '/data/caf.json', {encoding: 'utf8'});
  sadler = JSON.parse(sadler);
  caf = JSON.parse(caf);

  d3.select('#day')
    .text(today)

  function displayData(menu) {
    for (var meal in Object.keys(menu)) {

    }
  }
})
}).call(this,"/")
},{"fs":2}],2:[function(require,module,exports){

},{}]},{},[1]);
