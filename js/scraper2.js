var jsdom = require('jsdom');
var day_of_week = 'monday'

module.exports = {
	getData: function() {
	    jsdom.env({
	        url: 'https://m.dining.wm.edu/images/WeeklyMenu_tcm904-29345.htm',
	        scripts: ['http://code.jquery.com/jquery.js'],
	        done: function (errors, window) {
	            var $ = window.$;
	            $('table #' + day_of_week).each(function() {
	                raw_meals = ($(this).text());
	            });
	        }
	    });
	}

}
