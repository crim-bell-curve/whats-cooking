/*
 * Build the webpage
 */

window.addEventListener('load', function() {

    var sadler_menu = require('./sadler_menu.js'),
        caf_menu = require('./caf_menu'),
        moment = require('moment');

    d3.select('#day')
        .text(moment().format('dddd'))
        .style({'font-size': 25})
    
    function displayData(menu) {

        function arrange(div_name, data_obj) {
            for (var i in Object.keys(data_obj)) {
                var food = JSON.stringify(data_obj[Object.keys(data_obj)[i]])
                    .replace(/,/g, ', ')
                    .replace(/"/g, '')
                    .replace(/\[/g, '')
                    .replace(/\]/g, '')
                d3.select(div_name)
                    .append('div')
                        .attr('class', 'menu_item') ///////////////////////////////////////
                        .html('<span style="color: black">'+Object.keys(data_obj)[i]+'</span>')
                    .append('div')
                        .append('p').text(food)
                        .attr('class', 'menu_item') ///////////////////////////////////////
            }
        }
        arrange('#breakfast', menu.breakfast);
        arrange('#lunch', menu.lunch);
        arrange('#dinner', menu.dinner);
        arrange('#late_night', menu.late_night);
    }

    d3.select('#caf_btn').on('click', function() {
        d3.select('#sadler_btn').style({'color': '$fff','background-color': '#000'})
        d3.select('#caf_btn').style({'color': '#000', 'background-color': '#DCC197'})

        displayData(caf_menu);

        d3.event.stopPropagation();
    })

    d3.select('#sadler_btn').on('click', function() {
        d3.select('#caf_btn').style({'color': '$fff','background-color': '#000'})
        d3.select('#sadler_btn').style({'color': '#000', 'background-color': '#DCC197'})
        
        displayData(sadler_menu);

        d3.event.stopPropagation();
    })

}, false);
