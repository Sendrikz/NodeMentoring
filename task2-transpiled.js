"use strict";

var _csvtojson = _interopRequireDefault(require("csvtojson"));

var _fs = require("fs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var csvFilePath = './csv/nodejs-hw1-ex1.csv';
(0, _csvtojson["default"])({
  output: "json"
}).fromFile(csvFilePath).subscribe(function (jsonObjLine) {
  (0, _fs.appendFile)("resultLineByLine.txt", JSON.stringify(jsonObjLine) + '\n', function (error) {
    if (error) {
      console.error(error);
    }
  });
}, function (error) {
  return console.error(error.message);
}, function () {
  return console.log('success');
});
