/*
 * Get the current menu url
 * Takes one argument (string), either 'sadler' or 'caf'
 */

function getLink(dining_hall) {

    var jsdom = require('jsdom');

    if (dining_hall == 'sadler')
        the_url = 'https://dining.wm.edu/dining-choices/resident/sadler.html'
    else
        the_url = 'https://dining.wm.edu/dining-choices/resident/commons-dining-hall.html'

    jsdom.env({
        url: the_url,
        scripts: ['http://code.jquery.com/jquery.js'],
        done: function(errors, window) {
            $ = window.$;
            
            var links = [];
            $('a').each(function() {
                links.push($(this).attr('href'));
            })
            for (var i in links) {
                if (links[i].indexOf('/images/Weekly') > -1) {
                    console.log('https://dining.wm.edu/' + links[i])
                    return 'https://dining.wm.edu/' + links[i];
                };
            };          
        }
    })
}

module.exports = {
    caf: getLink('caf'),
    sadler: getLink('sadler')

}