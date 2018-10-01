var args = process.argv;
var num = args[2];


var fs = require("fs");

// Asynchronous read
fs.readFile(num, function (err, data) {
   if (err) {
      return console.error(err);
   }
   console.log("Asynchronous read: " + data.toString());
});

/*
var fs = require("fs");

// Asynchronous read
fs.readFile('test_file_text.txt', function (err, data) {
   if (err) {
      return console.error(err);
   }
   console.log("Asynchronous read: " + data.toString());
});
*/