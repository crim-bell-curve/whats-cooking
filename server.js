/*
 * Server for fetching the current lunch menu url for both dining halls
 * and then scraping those menus
 *
 * To do
 *   - scrape once a day at the first request and cache the 
 *     menu object returned by scraper.js for faster loading
 *    
 *
 */

var express = require('express')
var app = express()

app.use(express.static(__dirname + "/"));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html')
})

var port = process.env.PORT || 5000

var server = app.listen(port, function () {

    var host = server.address().address
    console.log('Example app listening at http://%s:%s', host, port)

})
