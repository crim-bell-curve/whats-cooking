var request = require('request');
var cheerio = require('cheerio')
var htmlparser = require('htmlparser2');

function get_webpage(dining_hall_url) {
	request(dining_hall_url, function (error, response, body) {
	  if (!error && response.statusCode == 200) {
	    return body; // Print the google web page.
	  }
	})
}

sadler = 'https://dining.wm.edu/dining-choices/resident/sadler.html';
caf = 'https://dining.wm.edu/dining-choices/resident/commons-dining-hall.html';

sadler_page = get_webpage(sadler);
caf_page = get_webpage(caf);

console.log(sadler_page);