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

app.get('/', function (req, res) {
  res.send('Hello World!')
})

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port
  console.log(host)
  console.log('Example app listening at http://%s:%s', host, port)

})