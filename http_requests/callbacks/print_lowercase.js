var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'

};

function printUpperCase(html) {//This is a callback function that logs the HTML content
  console.log(html.toLowerCase());
}

getHTML(requestOptions, printUpperCase);
