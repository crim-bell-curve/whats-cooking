
var async = require('async'),
    queue = require('queue-async'),
    jsdom = require('jsdom'),
    moment = require('moment'),
    day_of_week = moment().format('dddd').toLowerCase();


var homepages = {sadler_home: 'https://dining.wm.edu/dining-choices/resident/sadler.html',
                 caf_home: 'https://dining.wm.edu/dining-choices/resident/commons-dining-hall.html'}

var menu_links = [];

function getLink(home) {
    jsdom.env({
        url: home,
        scripts: ['http://code.jquery.com/jquery.js'],
        done: function(errors, window) {
            $ = window.$;
            var links = [];
            $('a').each(function() { links.push($(this).attr('href')); })
            for (var i in links) {
                if (links[i].indexOf('/images/Weekly') > -1) {
                    menu_links.push('https://dining.wm.edu' + links[i])
                    console.log(menu_links);
                };
            };
        }
    })
}

/*
async.series([getLink(homepages.sadler_home), getLink(homepages.caf_home),done()])
function done() {
    console.log('done')
}
*/

queue(3)
    .defer(getLink, homepages.sadler_home)
    .defer(getLink, homepages.caf_home)
    .awaitAll(done);
function done() { console.log("all done!"); }