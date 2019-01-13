cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "jerry.adder.Adder",
    "file": "plugins/jerry.adder/www/Adder.js",
    "pluginId": "jerry.adder",
    "clobbers": [
      "cordova.plugins.Adder"
    ]
  },
  {
    "id": "jerry.adder1.Adder1",
    "file": "plugins/jerry.adder1/www/Adder1.js",
    "pluginId": "jerry.adder1",
    "clobbers": [
      "cordova.plugins.Adder1"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-whitelist": "1.3.3",
  "jerry.adder": "1.0.0",
  "jerry.adder1": "1.0.0"
};
// BOTTOM OF METADATA
});