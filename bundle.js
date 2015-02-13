(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// Building the webpage

//var scraper = require('./js/scraper.js')

window.addEventListener('load', function() {
	/*

	scraper(displayData)

	
	*/
	var menu = require('./menu.js')

	function displayData() {
		
		function arrange(div_name, data_obj) {
			for (var i in Object.keys(data_obj)) {
				d3.select(div_name)
				    .append('div')
				        //.append('p').text(Object.keys(data_obj)[i])
				        .html('<span style="background-color: black">'+Object.keys(data_obj)[i]+'</span>')
				        //.style('background-color', 'black')
				    .append('div')
				    	.append('p').text(data_obj[Object.keys(data_obj)[i]])
				    	//.append('hr')
			}
		}

		arrange('#breakfast', menu.breakfast);
		arrange('#lunch', menu.lunch);
		arrange('#dinner', menu.dinner);
		arrange('#late_night', menu.late_night);
	}

	displayData();
	
}, false);


},{"./menu.js":2}],2:[function(require,module,exports){
module.exports = { breakfast: 
   { 'Entrée': 
      [ 'Sausage Gravy & Biscuit',
        'Oatmeal',
        'Scrambled  Eggs',
        'Buttermilk Whole Wheat Pancakes',
        'French Fried Tater Tots',
        'Turkey Sausage Links',
        'Hard Cooked Cage Free Egg' ],
     Exhibition: [ 'Omelet Bar' ],
     Pizza: [ 'Bagel with Eggs & Ham' ] },
  lunch: 
   { 'Entrée': 
      [ 'Vegetarian Paella',
        'Broccoli Spears',
        'Baked Garlic Flatbread Strips' ],
     Exhibition: 
      [ 'Shell Pasta',
        'Whole Wheat Penne',
        'Spaghetti Sauce with Tomato Bits',
        'Alfredo Sauce',
        'Rigatoni Arrabiata Casserette',
        'Herb Seasoned Breadsticks',
        'Grill',
        'Chicken Sandwich',
        'Grilled Cheese',
        'French  Fries',
        'International',
        'Scratch Gyro Bar' ],
     Pizza: [],
     Grill: [ 'Chicken Sandwich', 'Grilled Cheese', 'French  Fries' ],
     International: 
      [ 'Scratch Gyro Bar',
        'Pizza',
        'Antipasto Pizza Slice',
        'Pepperoni Pizza',
        'Margherita Pizza',
        'Herb Seasoned Breadsticks' ],
     Salad: 
      [ 'Salad Bar Station',
        'Mediterranean Chicken Salad',
        'Tossed Vegetable Salad',
        'Cilantro Lime Soy Dressing' ],
     Soup: 
      [ 'Tomato Soup Florentine',
        'Chicken Noodle Soup with Fresh Dill' ],
     'Vegetarian/Vegan': 
      [ 'Pita Chips',
        'Hummus',
        'Broccoli, Olives & Sun Dried Tomatoes',
        'Lentils and Swiss Chard',
        'Turkish Bulgur Pilaf with Garbanzo Beans',
        'Roasted Onion-Habanero Salsa',
        'Melon Jalapeno Salsa',
        'Banana Smoothie',
        'Sun-Dried Tomato & Gorgonzola Bruschetta',
        'Spanish-Style Garbanzo Beans',
        'Baked Sweet Potatoes',
        'Baked  Potato',
        'Vegetarian Chili' ],
     'Simple Servings': 
      [ 'Thick & Zesty Turkey Chili',
        'Polenta with Caramelized Onions',
        'Whole Green Beans' ] },
  dinner: 
   { 'Entrée': 
      [ 'Cheese Enchiladas',
        'Black Bean & Corn Salsa',
        'Arroz Verde',
        'Aztec Corn',
        'Roasted Southwestern Vegetables' ],
     Exhibition: 
      [ 'Shell Pasta',
        'Whole Wheat Penne',
        'Spaghetti Sauce with Tomato Bits',
        'Alfredo Sauce',
        'Rigatoni Arrabiata Casserette',
        'Herb Seasoned Breadsticks',
        'Grill',
        'Kansas City BBQ Pulled Pork Sandwich',
        'Grilled Cheese & Tomato Sandwich',
        'French  Fries',
        'International',
        'Scratch Gyro Bar' ],
     Pizza: [],
     Grill: 
      [ 'Kansas City BBQ Pulled Pork Sandwich',
        'Grilled Cheese & Tomato Sandwich',
        'French  Fries' ],
     International: 
      [ 'Scratch Gyro Bar',
        'Pizza',
        'Antipasto Pizza Slice',
        'Pepperoni Pizza',
        'Margherita Pizza' ],
     Salad: 
      [ 'Salad Bar Station',
        'Mediterranean Chicken Salad',
        'Tossed Vegetable Salad',
        'Cilantro Lime Soy Dressing' ],
     Soup: 
      [ 'Tomato Soup Florentine',
        'Chicken Noodle Soup with Fresh Dill' ],
     'Vegetarian/Vegan': 
      [ 'Fripps Potato Chips Snack',
        'Hummus',
        'Broccoli, Olives & Sun Dried Tomatoes',
        'Lentils and Swiss Chard',
        'Turkish Bulgur Pilaf with Garbanzo Beans',
        'Roasted Onion-Habanero Salsa',
        'Melon Jalapeno Salsa',
        'Banana Smoothie',
        'Quinoa Salad Plate',
        'Eggplant Caponata Griddle Sandwich',
        'Baked  Potato',
        'Vegetarian Chili',
        'Baked Sweet Potato' ],
     'Simple Servings': 
      [ 'Italian Style Pork Loin',
        'Simple Pan Fried Falafel',
        'Jasmine Rice',
        'Cucumber  Salad' ] },
  late_night: { 'Entrée': [ 'Fried Rice Bar' ] } }
},{}]},{},[1]);
