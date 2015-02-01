var jsdom = require("jsdom");
var moment = require('moment');

//var day_of_week = moment().format('dddd').toLowerCase();
var day_of_week = 'monday';
var sadler_url = 'https://m.dining.wm.edu/images/WeeklyMenu_tcm904-29345.htm'

var weekday = {
    'BREAKFAST': {
        stations: ['Dessert','Entrée','Exhibition', 'Pizza']
    }, 
    'LUNCH': {
        stations: ['Deli', 'Entrée', 'Exhibition', 'Grill', 
                    'International', 'Pizza', 'Salad', 'Soup',
                    'Vegetarian/Vegan', 'Simple Servings']
    }, 
    'DINNER': {
        stations: ['Deli', 'Entrée', 'Exhibition', 'Grill', 
                    'International', 'Pizza', 'Salad', 'Soup',
                    'Vegetarian/Vegan', 'Simple Servings']
    }, 
    'LATE NIGHT': {
        stations: ['Entrée']
    }
}

function getParse(dhall_url, callback) {
    jsdom.env({
        url: dhall_url,
        scripts: ["http://code.jquery.com/jquery.js"],
        done: function (errors, window) {
            var $ = window.$;
            $("table #" + day_of_week).each(function() {
                raw_meals = ($(this).text());
                callback();
            });
        }
    });
}

function cleanData() {
    var arr = raw_meals.split('\n');
    arr = arr.map(function(meal) {
        if (meal != '' && meal != '   ' && meal != ' ') {
            return meal //.trim();
        };
    });
    full_list = [];
    for (var index in arr) {
        if (arr[index]) {
            full_list.push(arr[index])
        }
    }
    console.log(full_list);
}

function organizeData() {
    pass;
}

var full_list, raw_meals;
getParse(sadler_url, cleanData);

