window.addEventListener('load', function() {
  var fs = require('fs'),
      now = new Date(),
      today = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'][ now.getDay() ];
  
  var sadler = JSON.parse(fs.readFileSync(__dirname + '/data/sadler.json', {encoding: 'utf8'})),
      caf = JSON.parse(fs.readFileSync(__dirname + '/data/caf.json', {encoding: 'utf8'}));
  
  d3.select('#day')
    .text(today)

  function display(menu) {
    var content = d3.select('#content');
    for (var meal in menu) {
      content.append('div').attr('id', meal);
      var m = d3.select('#' + meal).append('h4').text(meal);
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