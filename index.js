'use strict';

module.exports = {
  /**
   * The run method is the start point of the extension.
   * @param {Object}     params         The extension parameters.
   * @param {DustSensor} params.modules The dust sensor instance.
   */
  run: function(params) {
    params.modules.on('change', function(data) {
      console.log('PM2.5: ' + data.pm25);
    });
  }
}
