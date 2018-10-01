
var https = require('https');

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step3.html'
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

// _____________________________________________________________________

/*
function getAndPrintHTML (options, response) {

    response.on('data', function(chunk) {
    finalString = ""
    console.log('[-- CHUNK OF LENGTH ' + chunk.length + ' --]');
    finalString += chunk.toString()
    console.log(finalString);
  });
}

https.request(getAndPrintHTMLChunks(requestOptions)).end();
*/

