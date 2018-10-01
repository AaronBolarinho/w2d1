var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function reverse(html){
    string = html.split("").reverse().join("");
    console.log(string);
}

getHTML(requestOptions, reverse);

