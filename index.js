// Building the webpage

//var scraper = require('./js/scraper.js')

window.addEventListener('load', function() {
	/*

	scraper(displayData)

	
	*/
	var menu = require('./menu.js')

	function displayData() {
		
		function arrange(div_name, data_obj) {
			for (var i in Object.keys(data_obj)) {
				d3.select(div_name)
				    .append('div')
				        .html('<span style="background-color: black">'+Object.keys(data_obj)[i]+'</span>')
				    .append('div')
				    	.append('p').text(data_obj[Object.keys(data_obj)[i]])
			}
		}

		arrange('#breakfast', menu.breakfast);
		arrange('#lunch', menu.lunch);
		arrange('#dinner', menu.dinner);
		arrange('#late_night', menu.late_night);
	}

	displayData();
	
}, false);

