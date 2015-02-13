// Building the webpage

//var scraper = require('./js/scraper.js')

window.addEventListener('load', function() {
	/*
	finished = false;

	scraper()

	while (!finished) {
		d3.select('#loading').text('Loading')
		d3.select('#loading').text('Loading.')
		d3.select('#loading').text('Loading..')
		d3.select('#loading').text('Loading...')
		finished = true
	}

	console.log('done!')
	
	*/
	var menu = require('./menu.js')

	function displayData(div_name, data_obj) {
		for (var i in Object.keys(data_obj)) {
			d3.select(div_name)
			    .append('div')
			        .append('p').text(Object.keys(data_obj)[i])
			    .append('div')
			    	.append('p').text(data_obj[Object.keys(data_obj)[i]])
			    	.append('hr')
		}
	}

	displayData('#breakfast', menu.breakfast);
	displayData('#lunch', menu.lunch);
	displayData('#dinner', menu.dinner);
	displayData('#late_night', menu.late_night);
	/*
	d3.select('#breakfast').append('p')
	    .text(JSON.stringify(menu.breakfast))
	d3.select('#lunch').append('p')
	    .text(JSON.stringify(menu.lunch))
	d3.select('#dinner').append('p')
	    .text(JSON.stringify(menu.dinner))
	d3.select('#late_night').append('p')
	    .text(JSON.stringify(menu.late_night))
	*/
	
}, false);

