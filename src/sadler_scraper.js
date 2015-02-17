/*
 * Scrapes dining hall menu from https://dining.wm.edu/ 
 */

function scrape() {

    var jsdom = require('jsdom'),
        moment = require('moment'),
        day_of_week = moment().format('dddd').toLowerCase();
    
    var sadler_url = 'https://dining.wm.edu/images/WeeklyMenu_tcm903-2231.htm';

    function getData(dhall_url, callback) {
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
    }

    function cleanData() {
        var arr = raw_meals.split('\n');
        arr = arr.map(function(meal) {
            if (meal !== '' && meal !== '   ' && meal != ' ') {
                return meal.trim();
            }
        });
        full_list = [];
        for (var index in arr) {
            if (arr[index]) {
                full_list.push(arr[index]);
            };
        };
        var temp = full_list[0].split(' ');
        full_list[0] = temp[0]; 
        full_list.splice(1, 0, temp[1]);

        var bf = full_list.indexOf('BREAKFAST'),
            ln = full_list.indexOf('LUNCH'),
            dn = full_list.indexOf('DINNER'),
            lt = full_list.indexOf('LATE NIGHT');

        var breakfast = full_list.slice(bf+1,ln),
            lunch = full_list.slice(ln+1, dn),
            dinner = full_list.slice(dn+1,lt),
            late_night = full_list.slice(lt+1, full_list.length);
            
        var meals = [breakfast,lunch,dinner,late_night],
            meal_names = ['breakfast', 'lunch', 'dinner', 'late_night'],
            stations = ['Dessert', 'Entrée', 'Exhibition', 'Pizza',
                        'Grill', 'International', 'Salad', 'Soup',
                        'Vegetarian/Vegan', 'Simple Servings'],
            count = 0,
            obj = {};

        for (var i in meals) {
            included_stations = [];
            for (var j in stations) {
                if (meals[i].indexOf(stations[j]) !== -1) {
                    included_stations.push(stations[j]);
                };
            };
            obj[meal_names[count]] = {}
            for (var k in included_stations) {
                var start = meals[i].indexOf(included_stations[k]);
                var end = meals[i].indexOf(included_stations[Number(k)+1]) != -1 ? meals[i].indexOf(included_stations[Number(k)+1]) : meals[i].length;
                obj[meal_names[count]][included_stations[k]] = meals[i].slice(start+1,end);
            }
            count++  
        }

        console.log(obj);
        return obj;
    }
    
    getData(sadler_url,cleanData);
}

module.exports = scrape

