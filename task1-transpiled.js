"use strict";

var _reverseString = _interopRequireDefault(require("reverse-string"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

process.stdin.on('data', function (data) {
  var reversedStr = (0, _reverseString["default"])(data.toString());
  process.stdout.write(reversedStr + '\n');
});
