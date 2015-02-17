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

app.use("/style", express.static(__dirname + '/style'));
app.use('/bundle.js', express.static(__dirname + '/bundle.js'))
app.use('/data', express.static(__dirname + '/data'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html')

})

var server = app.listen(3000, function () {

    var host = server.address().address
    var port = server.address().port
    console.log(host)
    console.log('Example app listening at http://%s:%s', host, port)

})