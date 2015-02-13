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
				var food = JSON.stringify(data_obj[Object.keys(data_obj)[i]])
				    .replace(/,/g, ', ')
				    .replace(/"/g, '')
				    .replace(/\[/g, '')
				    .replace(/\]/g, '')
				console.log(typeof food)
				d3.select(div_name)
				    .append('div')
				        .html('<span style="background-color: black">'+Object.keys(data_obj)[i]+'</span>')
				    .append('div')
				    	.append('p').text(food)
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
      [ 'Oatmeal',
        'Scrambled  Eggs',
        'Buttermilk Pancakes',
        'Hard Cooked Cage Free Egg' ],
     Exhibition: [ 'Omelet Station' ],
     Pizza: [ 'Breakfast Biscuit with Egg & Bacon' ] },
  lunch: 
   { 'Entrée': 
      [ 'Beef Stroganoff over Mashed Red Potatoes',
        'Fresh Grilled Vegetables' ],
     Exhibition: 
      [ 'Whole Wheat Rotini',
        'Fusilli',
        'Spaghetti Sauce with Tomato Bits',
        'Bechamel Sauce',
        'Trainwreck Pasta Casserette',
        'Garlic Parmesan Breadsticks',
        'Grill',
        'Crispy Chicken Sandwich',
        'Turkey Reuben Melt',
        'French  Fries',
        'International',
        'Grilled Fiesta Lime Chicken Fajita',
        'Vegetarian Fajitas',
        'Light Sour Cream',
        'Sliced Jalapeno Peppers',
        'Black Bean & Corn Salad' ],
     Pizza: [],
     Grill: 
      [ 'Crispy Chicken Sandwich',
        'Turkey Reuben Melt',
        'French  Fries' ],
     International: 
      [ 'Grilled Fiesta Lime Chicken Fajita',
        'Vegetarian Fajitas',
        'Light Sour Cream',
        'Sliced Jalapeno Peppers',
        'Black Bean & Corn Salad',
        'Pizza',
        'Flatbread Pizza Bar' ],
     Salad: 
      [ 'Salad Bar Station',
        'Arrugla Salad w/Serrano Ham&Melon',
        'Caesar Salad Bar' ],
     Soup: [ 'Chicken Ditalini Soup', 'Carrot and Coriander Soup' ],
     'Vegetarian/Vegan': 
      [ 'Fried Tortilla Chips',
        'Hummus',
        'Couscous Pepper, Olive & Pine Nut Salad',
        'White Bean & Caramelized Onion Salad',
        'Curried Vegetable  Salad',
        'Tropical Salsa',
        'Pico de Gallo',
        'Fruit Smoothie',
        'Tunisian Vegetable Stew w/ Almonds',
        'Couscous',
        'Baked  Potato',
        'Vegetarian Chili',
        'Green Lentils',
        'Steamed Fresh Sweet Potatoes',
        'Farmer\'s Market Vegetable Medley' ],
     'Simple Servings': 
      [ 'Kansas City  BBQ Beef',
        'Sweet Potato French Fries',
        'Southern Cole Slaw' ] },
  dinner: 
   { 'Entrée': 
      [ 'Maple-Glazed Roast Pork Loin',
        'Long Grain & Wild Rice',
        'Balsamic Roast Vegetables' ],
     Exhibition: 
      [ 'Whole Wheat Rotini',
        'Fusilli',
        'Spaghetti Sauce with Tomato Bits',
        'Bechamel Sauce',
        'Grill',
        'Grilled Chicken Breast, Random',
        'Bratwurst, Raw, 4:1',
        'Shoestring French  Fries',
        'International',
        'Grilled Fiesta Lime Chicken Fajita',
        'Vegetarian Fajitas',
        'Light Sour Cream',
        'Sliced Jalapeno Peppers',
        'Black Bean & Corn Salad' ],
     Pizza: [],
     Grill: 
      [ 'Grilled Chicken Breast, Random',
        'Bratwurst, Raw, 4:1',
        'Shoestring French  Fries' ],
     International: 
      [ 'Grilled Fiesta Lime Chicken Fajita',
        'Vegetarian Fajitas',
        'Light Sour Cream',
        'Sliced Jalapeno Peppers',
        'Black Bean & Corn Salad',
        'Pizza',
        'Flatbread Pizza Bar' ],
     Salad: 
      [ 'Salad Bar Station',
        'Arrugla Salad w/Serrano Ham&Melon',
        'Caesar Salad Bar' ],
     Soup: [ 'Chicken Ditalini Soup', 'Carrot and Coriander Soup' ],
     'Vegetarian/Vegan': 
      [ 'Fried Tortilla Chips',
        'Hummus',
        'Green Onion & Tomato Hummus',
        'Couscous Pepper, Olive & Pine Nut Salad',
        'White Bean & Caramelized Onion Salad',
        'Curried Vegetable  Salad',
        'Tropical Salsa',
        'Pico de Gallo',
        'Fruit Smoothie',
        'Veg Chili Macaroni Dinner Plate',
        'Tofu Fried Rice',
        'Vegetarian Chili',
        'Baked Sweet Potato',
        'Green Lentils',
        'Cajun Spiced Roasted Potatoes',
        'Farmer\'s Market Vegetable Medley' ],
     'Simple Servings': 
      [ 'Pork Cutlet, Raw, 4 oz',
        'Aromatic Basmati Rice',
        'Whole Green Beans' ] },
  late_night: { 'Entrée': [ 'House Taco Bar' ] } }
},{}]},{},[1]);
