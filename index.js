'use strict';

var express = require('express');

module.exports = {
  /**
   * The run method is the start point of the extension.
   * @param {Object}     params         The extension parameters.
   * @param {DustSensor} params.modules The dust sensor instance.
   */
  run: function(params) {
    var app = express();
    var pmData = {};

    app.get('/', function (req, res) {
      res.jsonp(pmData);
    });

    params.modules.on('change', function(data) {
      pmData = data;
    });

    app.listen(3000, function () {
      console.log('Air quality station listening on port 3000!');
    });
  }
}
