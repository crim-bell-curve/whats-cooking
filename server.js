/* 
 * Server for fetching the current lunch menu url for both dining halls
 * and then scraping those menus
 * 
 * To do
 *   - scrape once a day at the first request and cache the 
 *     menu object returned by scraper.js for faster loading
 * 
 */

var express = require('express');
var app = express();
var fs = require('fs');
var moment = require('moment');

var log = JSON.parse(String(fs.readFileSync('./data/log.json')));
var today = moment().format('dddd').toLowerCase();

if (today !== log.current) {
	
	var q = require('queue-async')(1);
	var getLink = require('./src/getLink.js')
	var scrape_sad = require('./src/sadler_scraper.js')
	var scrape_caf = require('./src/caf_scraper.js')

	var sadler_current, caf_current;

	q.defer( getLink, 'sadler' )
	q.defer( scrape_sad, 'https://dining.wm.edu/images/WeeklyMenu_tcm903-29345.htm' )
	q.defer( getLink, 'caf' )
	q.defer( scrape_caf, 'https://dining.wm.edu/images/WeeklyMenu_tcm903-29345.htm' )
	q.awaitAll(done)

	function done(err, results) {
		console.log(results);
		fs.writeFile(__dirname + '/data/sadler_menu.js', 'module.exports = ' + JSON.stringify(results[1]))
		fs.writeFile(__dirname + '/data/caf_menu.js', 'module.exports = ' + JSON.stringify(results[3]))
		log.current = today;
		fs.writeFile(__dirname + '/data/log.json', JSON.stringify(log))	
		
	}
}
app.use(express.static(__dirname + "/"));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html')
})

var port = process.env.PORT || 5000

var server = app.listen(port, function () {
    var host = server.address().address
    console.log('Example app listening at http://%s:%s', host, port)
})
