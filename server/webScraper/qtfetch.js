const http = require('http');
const https = require('https');
const microdata = require('microdata-node');

module.exports = { //https://stackoverflow.com/questions/5797852/in-node-js-how-do-i-include-functions-from-my-other-files
	getURL:function(url){
		var designate = url.startsWith('https') ? https : http;
		
		return new Promise((resolve, reject)=>{ //https://stackoverflow.com/questions/41470296/how-to-await-and-return-the-result-of-a-http-request-so-that-multiple-request
			designate.get(url, (response)=>{ //https://www.twilio.com/blog/2017/08/http-requests-in-node-js.html
				let data = '';
				
				response.on('data', (chunk)=>{
					data += chunk;
				});
				
				response.on('end', ()=>{
					resolve({'url':url, 'data':data});
				});
			}).on("error", (error)=>{
				reject(error);
			});					
		});		
	},
	parseMicrodata:function(data){
		var json = microdata.toJson(data, { //parse microdata
			base: 'http://www.example.com'
		});
		
		return json;
	}
};


