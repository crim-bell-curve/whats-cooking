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
	fetchData()
	log.current = today;
	fs.writeFile(__dirname + '/data/log.json', JSON.stringify(log))	
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

function fetchData() {
	var scrape_sadler = require('./src/sadler_scraper.js'),
		scrape_caf = require('./src/caf_scraper.js');
	console.log(scrape_caf())
	//fs.writeFile(__dirname + '/data/temp.json', scrape_caf())
}
