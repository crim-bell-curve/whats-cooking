window.addEventListener('load', function() {
  //var fs = require('fs'),
  var now = new Date(),
      today = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'][ now.getDay() ];
  //var sadler = JSON.parse(fs.readFileSync('./data/sadler.json', {encoding: 'utf8'})),
  //var caf = JSON.parse(fs.readFileSync('./data/caf.json', {encoding: 'utf8'}));
  
  d3.select('#day')
    .text(today)
  var colors = ['#BEA8E6', '#84C3C5', '#BD7B99', '#40586F']
  function display(menu) {
    var content = d3.select('#content');
    var count = 0
    for (var meal in menu) {
      content.append('div')
        .attr('class', 'meal')
        .attr('id', meal)
        .style('background-color', colors[count++]);
      var m = d3.select('#' + meal)
      m.append('h1').text(meal).style('text-decoration', 'underline');
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
  display({"LUNCH":{"Deli":["Egg & Cheese Biscuit with Sausage"],"Entrée":["Eggs Benedict with Canadian Bacon"],"Grill":["Oatmeal"],"Pizza":["Cheese Pizza"],"Vegetarian/Vegan":["Broccoli Florets"],"Simple Servings":["Maple Peach Glazed Ham"]},"DINNER":{"Deli":["Egg & Cheese Biscuit with Sausage"],"Entrée":["Chicken Tagine"],"Grill":["Classic Cheeseburger on a Toasted Bun"],"International":["Chicken Fried  Rice"],"Pizza":["Cheese Pizza"],"Tastechanger":["Broccoli Pesto Penne Casserette"],"Vegetarian/Vegan":["Indian Potatoes, Peas and Cauliflower"],"Simple Servings":["Grilled Cumin Chicken"]}})
});
