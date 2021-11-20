"use strict";

var _csvtojson = _interopRequireDefault(require("csvtojson"));

var _fs = require("fs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var csvFilePath = './csv/nodejs-hw1-ex1.csv';
var readStream = (0, _fs.createReadStream)(csvFilePath);
var writeStream = (0, _fs.createWriteStream)("./resultPipe.txt", 'utf8');
readStream.pipe((0, _csvtojson["default"])({
  output: "json"
})).pipe(writeStream);
