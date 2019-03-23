var qtFetch = require('../../server/webScraper/qtfetch.js');
var readEvent = require('../../server/model/read/getIDForEvent.js');
var readPlace = require('../../server/model/read/getIDForPlace.js');
var readOrganization = require('../../server/model/read/getIDForOrganization.js');

var url = 'http://spaxsto.com/calendar/action~posterboard/page_offset~0/request_format~json?request_type=json&ai1ec_doing_ajax=true';
qtFetch.getURL(url).then(function(content){
	var data = JSON.parse(content.data);
	var output = {};

	const dateRegex = /([\w]{3} [\d]{1,2}) @/;
	const startRegex = /[\w]{3} [\d]{1,2} @ ([\d]{1,2}:[\d]{2} [a|p]m)/;
	const endRegex = /[\w]{3} [\d]{1,2} @ [\d]{1,2}:[\d]{2} [a|p]m – ([\d]{1,2}:[\d]{2} [a|p]m)/;
	let m;
		
	for(var i in data.html.dates){
		for(var j in data.html.dates[i].events.notallday){
			var event = data.html.dates[i].events.notallday[j];
			
			if(event.post_id == '1518'){ //Open All Day
				continue;
			}
			
			//postid is the same for all same events
			if(typeof output[event.post_id] === 'undefined'){
				output[event.post_id] = {
					long_title_english:event.filtered_title,
					need_registration:false,
					registration_website_english:event.permalink,
					description_english:event.post_excerpt,
					image_link:event.avatar_url,
					instances:[]
				};
			}
			
			var event_span = event.timespan_short.trim();
			var event_year = event.enddate_info.year;
			
			m = dateRegex.exec(event_span);
			var event_date = m[1];
			
			m = startRegex.exec(event_span);
			var event_start = m[1];
			
			m = endRegex.exec(event_span);
			var event_end = (m != null) ? m[1] : null;
			
			event_start = Date.parse(event_year + " " + event_date + " " + event_start) / 1000;
			event_end = event_end ? Date.parse(event_year + " " + event_date + " " + event_end) / 1000 : null;
			
			output[event.post_id].instances.push({event_start, event_end});
		}
	}
	
	console.log(output);
}, function(){});
