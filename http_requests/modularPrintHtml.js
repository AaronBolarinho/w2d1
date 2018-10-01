var https = require('https');

function getHTML (options, callback) {


// notice that https.get takes a callback with one parameter -
// response, which is a Stream that represents the HTTP response
  https.get(options, function (response) {
    var string = "";

  // set encoding of received data to UTF-8
    response.setEncoding('utf8');

  // the callback is invoked when a `data` chunk is received
    response.on('data', function (data) {
      var dataBuffer = data.toString(); //buffer
      string = string + dataBuffer; //Update empty string with each chunk
    });

    response.on('error', function (err) {//Error
      console.log(err);
    });

  // the callback is invoked when all of the data has been received
  // (the `end` of the stream)
    response.on('end', function() {
    callback(string);
    });

  });

}

function printHTML (html) {//This is a callback function that logs the HTML content
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML)


/*
var https = require('https');

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };


function getAndPrintHTMLChunks (response) {

  response.on('data', function(chunk) {
    finalString = ""
    console.log('[-- CHUNK OF LENGTH ' + chunk.length + ' --]');
    finalString += chunk.toString()
    console.log(finalString);
  });
}

https.request(requestOptions, getAndPrintHTMLChunks).end();
*/
