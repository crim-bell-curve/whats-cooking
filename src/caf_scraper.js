/*
 * Scrapes dining hall menu from https://dining.wm.edu/ - Caf
 */

module.exports = scrape;

function scrape(caf, next) {
	
    var jsdom = require('jsdom'),
		moment = require('moment'),
		day_of_week = moment().format('dddd').toLowerCase();

    var raw_meals;
    (function getData(dhall_url, callback) {
        jsdom.env({
            url: dhall_url,
            scripts: ['http://code.jquery.com/jquery.js'],
            done: function (error, window) {
                var $ = window.$;
                $('table #' + day_of_week).each(function() {
                    raw_meals = ($(this).text());
                    callback();
                });
            }
        });
    })(caf, cleanData);

    function cleanData() {
        var arr = raw_meals.split('\n');
        arr = arr.map(function(meal) {
            if (meal !== '' && meal !== '   ' && meal != ' ') {
                return meal.trim();
            }
        });
        var full_list = [];
        for (var index in arr) {
            if (arr[index]) {
                full_list.push(arr[index]);
            }
        }
        var temp = full_list[0].split(' ');
        full_list[0] = temp[0]; 
        full_list.splice(1, 0, temp[1]);

        var bf = full_list.indexOf('BREAKFAST'),
            ln = full_list.indexOf('LUNCH'),
            dn = full_list.indexOf('DINNER');

        var breakfast = full_list.slice(bf+1,ln),
            lunch = full_list.slice(ln+1, dn),
            dinner = full_list.slice(dn+1,full_list.length);
            
        var meals = [breakfast,lunch,dinner],
            meal_names = ['breakfast', 'lunch', 'dinner', 'late_night'],
            stations = ['Dessert', 'Entrée', 'Exhibition', 'Pizza',
                        'Grill', 'International', 'Salad', 'Soup',
                        'Vegetarian/Vegan', 'Simple Servings'],
            count = 0,
            obj = {};

        for (var i in meals) {
            var included_stations = [];
            for (var j in stations) {
                if (meals[i].indexOf(stations[j]) !== -1) {
                    included_stations.push(stations[j]);
                }
            }
            obj[meal_names[count]] = {};
            for (var k in included_stations) {
                var start = meals[i].indexOf(included_stations[k]);
                var end = meals[i].indexOf(included_stations[Number(k)+1]) != -1 ? meals[i].indexOf(included_stations[Number(k)+1]) : meals[i].length;
                obj[meal_names[count]][included_stations[k]] = meals[i].slice(start+1,end);
            }
            count++; 
        }
        next(null, obj);
    }    
}
