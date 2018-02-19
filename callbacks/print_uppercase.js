var https = require('https');   
var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

var printUppercase = function(html) {
	result = html.toUpperCase();
	console.log(result);
};

getHTML(requestOptions, printUppercase);