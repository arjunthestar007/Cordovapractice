cordova.define("jerry.adder.Adder", function(require, exports, module) {
var exec = require('cordova/exec');

exports.coolMethod = function (arg0, success, error) {
    exec(success, error, 'Adder', 'coolMethod', [arg0]);
};

});
