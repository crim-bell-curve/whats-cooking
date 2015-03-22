window.addEventListener('load', function() {
  var now = new Date(),
      today = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'][ now.getDay() ];

  d3.select('#day')
    .text(today)
  var colors = ['#BEA8E6', '#84C3C5', '#BD7B99', '#40586F']
  function display(menu, name) {
    var content = d3.select('#content');
    var count = 0
    content.append('h1')
      .text(name)
      .style({'text-align': 'center', 'font-size': 50, 'background-color': colors[count++]})
    for (var meal in menu) {
      content.append('div')
        .attr('class', 'meal')
        .attr('id', meal)
        .style('background-color', colors[count++]);
      var m = d3.select('#' + meal)
      m.append('h1')
        .text(meal)
        .style('text-decoration', 'underline');
      for (var station in menu[meal]) {
        stat = station.replace(/\//g, '');
        m.append('div')
          .attr('class', meal)
          .attr('id', stat)
        var s = d3.select('#' + stat)
        s.append('p')
          .text(station)
          .style('color', 'fff')
        menu[meal][station].forEach(function(item) {
          s.append('p').text(item);
        });
      }
    }
  }

  if (typeof sadler !== 'undefined') {
    display(sadler, 'Sadler')
  } else {
    d3.select('#content')
      .append('p')
      .text('SADLER NOT AVAILABLE. THANKS SODEXO...')
      .style({'font-size': 50, 'text-align': 'center', 'background-color': '#000', 'color': '#fff'})
  }

  if (typeof caf !== 'undefined') {
    display(caf, 'Caf')
  } else {
    d3.select('#content')
      .append('p')
      .text('CAF NOT AVAILABLE. THANKS SODEXO...')
      .style('font-size', 50)
  }

});
