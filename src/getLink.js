#!/usr/bin/env node

/*
 * Get the current menu url
 * Takes one argument (string), either 'sadler' or 'caf'
 */

module.exports = getLink;

function getLink(dining_hall, callback) {

    var jsdom = require('jsdom');
    var the_url;
    if (dining_hall == 'sadler')
        the_url = 'https://dining.wm.edu/dining-choices/resident/sadler.html';
    else
        the_url = 'https://dining.wm.edu/dining-choices/resident/commons-dining-hall.html';

    jsdom.env({
        url: the_url,
        scripts: ['http://code.jquery.com/jquery.js'],
        done: function(errors, window) {
            $ = window.$;
            
            var links = [];
            $('a').each(function() {
                links.push($(this).attr('href'));
            });
            for (var i in links) {
                if (links[i].indexOf('/images/Weekly') > -1) {
                    callback(null, 'https://dining.wm.edu/' + links[i]);
                }
            }     
        }
    });
}
