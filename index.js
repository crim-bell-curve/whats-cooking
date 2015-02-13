// Building the webpage


window.addEventListener('load', function() {

	//var scraper = require('./scraper');

	//var menu = scraper(displayData);

	var menu = require('./menu.js')

	function displayData() {

		function arrange(div_name, data_obj) {
			for (var i in Object.keys(data_obj)) {
				var food = JSON.stringify(data_obj[Object.keys(data_obj)[i]])
				    .replace(/,/g, ', ')
				    .replace(/"/g, '')
				    .replace(/\[/g, '')
				    .replace(/\]/g, '')
				d3.select(div_name)
				    .append('div')
				        .html('<span style="background-color: black">'+Object.keys(data_obj)[i]+'</span>')
				    .append('div')
				    	.append('p').text(food)
			}
		}

		arrange('#breakfast', menu.breakfast);
		arrange('#lunch', menu.lunch);
		arrange('#dinner', menu.dinner);
		arrange('#late_night', menu.late_night);
	}

	displayData();
	
}, false);

