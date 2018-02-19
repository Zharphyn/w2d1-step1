var https = require('https');   
var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

var printReverse = function(html) {
	result = html.split('').reverse().join('');
	console.log(result);
};

getHTML(requestOptions, printReverse);

