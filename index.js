window.addEventListener('load', function() {
  //var fs = require('fs'),
  var now = new Date(),
      today = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'][ now.getDay() ];
  
  //var sadler = JSON.parse(fs.readFileSync('./data/sadler.json', {encoding: 'utf8'})),
  //    caf = JSON.parse(fs.readFileSync('./data/caf.json', {encoding: 'utf8'}));
  
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
  display({"LUNCH":{"Deli":["Egg & Cheese Biscuit with Sausage","English Muffin with Egg & Ham","Grilled Cheese","Kale & Red Onion Grilled Cheese Sandwich","Chicken Caesar Salad","Strawberry Salad with Balsamic Chocolate"],"Entrée":["Eggs Benedict with Canadian Bacon"],"Grill":["Oatmeal","Omelet Station","Scrambled Eggs","Peanut Butter and Jelly French Toast","Hard Cooked Cage Free Egg","Home Fried  Potatoes","Turkey Bacon"],"Pizza":["Cheese Pizza","Herbed Pizza Bread","Cheeseburger Pizza"],"Vegetarian/Vegan":["Broccoli Florets","Ginger Mango Roasted Potatoes","Hummus","Spicy Hummus","White Bean & Tomato Salad","Quinoa with Squash, Tomatoes and Basil","Tabouleh Salad","Black Bean Salsa","Salsa Verde Cruda","Quinoa Salad Plate","Vegetable Chili","Baked Potato"],"Simple Servings":["Maple Peach Glazed Ham","Roasted Corn & Red Bell Pepper Confetti","Braised Kale","Green Lentils","Cucumber, Tomato & Onion Salad","Black Bean & Corn Salad"]},"DINNER":{"Deli":["Egg & Cheese Biscuit with Sausage","English Muffin with Egg & Ham","Grilled Cheese","Kale & Red Onion Grilled Cheese Sandwich","Chicken Caesar Salad","Strawberry Salad with Balsamic Chocolate"],"Entrée":["Chicken Tagine","Grilled Pita","Fish Sandwich with Pesto Mayonnaise","Tossed Salad"],"Grill":["Classic Cheeseburger on a Toasted Bun","Cheese Quesadilla","French Fries"],"International":["Chicken Fried  Rice","Brown Rice"],"Pizza":["Cheese Pizza","Herbed Pizza Bread","Cheeseburger Pizza"],"Tastechanger":["Broccoli Pesto Penne Casserette"],"Vegetarian/Vegan":["Indian Potatoes, Peas and Cauliflower","Broccoli Florets","Hummus","Spicy Hummus","White Bean & Tomato Salad","Quinoa with Squash, Tomatoes and Basil","Tabouleh Salad","Black Bean Salsa","Salsa Verde Cruda","Angel Hair Noodle Cake","Sauteed Cremini Mushrooms","Canzano Style Tomato Sauce","Vegetable Chili","Simple Baked Sweet Potato"],"Simple Servings":["Grilled Cumin Chicken","Grilled Zucchini","Herbed Potatoes","Green Lentils","Cucumber, Tomato & Onion Salad","Black Bean & Corn Salad"]}})
});
