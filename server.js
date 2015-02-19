/* 
 * Server for fetching the current lunch menu url for both dining halls
 * and then scraping those menus
 * 
 */

var express = require('express');
var app = express();
var fs = require('fs');
var moment = require('moment');

var log = JSON.parse(String(fs.readFileSync('./data/log.json')));
var today = moment().format('dddd').toLowerCase();

if (today !== log.current) {
	
	var q = require('queue-async')(1),
	    getLink = require('./src/getLink.js'),
		scrape_sad = require('./src/sadler_scraper.js'),
		scrape_caf = require('./src/caf_scraper.js');

	q.defer(getLink, 'sadler')
	q.defer(getLink, 'caf')
	q.awaitAll(use)

	function use(err, results) {
		
		console.log('scraping')
		q.defer(scrape_sad, results[0])
		q.defer(scrape_caf, results[1])
		q.awaitAll(build)
		
		function build(err, meals) {
			console.log('writing JSON')
			//console.log(meals[2])
			//console.log(meals[3])
			fs.writeFile(__dirname + '/data/sadler_menu.js', 'module.exports = ' + JSON.stringify(meals[2]));
			fs.writeFile(__dirname + '/data/caf_menu.js', 'module.exports = ' + JSON.stringify(meals[3]));
			log.current = today;
			fs.writeFile(__dirname + '/data/log.json', JSON.stringify(log));
			console.log('done!')

		}
	}
}

app.use(express.static(__dirname + '/'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

var port = process.env.PORT || 5000;

var server = app.listen(port, function () {
    var host = server.address().address;
    console.log('Example app listening at http://%s:%s', host, port);
});
