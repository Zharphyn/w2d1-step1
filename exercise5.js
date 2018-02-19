
var https = require('https');   
var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

var printHTML = function(html) {
	console.log('Inside printHTML',html);
};

getHTML(requestOptions, printHTML);