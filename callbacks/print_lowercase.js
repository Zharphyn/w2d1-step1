var https = require('https');   
var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

var printLowercase = function(html) {
	result = html.toLowerCase();
	console.log(result);
};

getHTML(requestOptions, printLowercase);