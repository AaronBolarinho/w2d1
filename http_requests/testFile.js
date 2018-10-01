var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

function printHTML (html) {//This is a callback function that logs the HTML content
  console.log(html);
}

getHTML(requestOptions, printHTML);