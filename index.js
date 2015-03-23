window.addEventListener('load', function() {
  var now = new Date(),
      today = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'][ now.getDay() ],
      colors = ['#BEA8E6', '#84C3C5', '#BD7B99', '#40586F'];

  d3.select('#day').text(today.toUpperCase())
  var content = d3.select('#content');

  function display(menu, name) {
    var count = 0
    content.append('p')
      .text(name)
      .style({'text-align': 'center', 'font-size': '3em', 'background-color': colors[count++]})
    for (var meal in menu) {
      content.append('div')
        .attr('class', 'meal')
        .attr('id', meal)
        .style('background-color', colors[count++]);
      var m = d3.select('#' + meal)
      m.append('p')
        .text(meal)
        .style({'text-decoration': 'underline', 'font-size': '2.5em'});
      for (var station in menu[meal]) {
        stat = meal + '-' + station.replace(/\//g, '');
        m.append('div')
          .attr('class', meal)
          .attr('id', stat)
        var s = d3.select('#' + stat)
        s.append('p')
          .text(station)
          .style({'color': 'fff', 'font-size': '1.7em'})
        menu[meal][station].forEach(function(item) {
          s.append('p')
            .text(item)
            .style({'font-size': '1.4em'})
        });
      }
    }
  }

  if (typeof sadler !== 'undefined') {
    display(sadler, 'SADLER')
  } else {
    d3.select('#content')
      .append('p')
      .text('SADLER NOT AVAILABLE. THANKS SODEXO...')
      .style({'font-size': '3em', 'text-align': 'center', 'background-color': '#000', 'color': '#fff'})
  }

  if (typeof caf !== 'undefined') {
    display(caf, 'CAF')
  } else {
    d3.select('#content')
      .append('p')
      .text('CAF NOT AVAILABLE. THANKS SODEXO...')
      .style({'font-size': '3em', 'text-align': 'center', 'background-color': '#000', 'color': '#fff'})
  }
});
