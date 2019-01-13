cordova.define("jerry.adder1.Adder1", function(require, exports, module) {
var exec = require('cordova/exec');

exports.coolMethod = function (arg0, success, error) {
    exec(success, error, 'Adder1', 'coolMethod', [arg0]);
};

});
