var exec = require("cordova/exec");
module.exports = {
  isAvailable: function (callback) {
    var errorHandler = function errorHandler(error) {
      // An error has occurred while trying to access the
      // BrowserController native implementation, most likely because
      // we are on an unsupported platform.
      callback(false);
    };
    exec(callback, errorHandler, "BrowserController", "isAvailable", []);
  },
  show: function (options, onSuccess, onError) {
    options = options || {};
    if (!options.hasOwnProperty('animated')) {
      options.animated = true;
    }
    exec(onSuccess, onError, "BrowserController", "show", [options]);
  },
  hide: function (onSuccess, onError) {
    exec(onSuccess, onError, "BrowserController", "hide", []);
  },
  connectToService: function (onSuccess, onError) {
    exec(onSuccess, onError, "BrowserController", "connectToService", []);
  },
  warmUp: function (onSuccess, onError) {
    exec(onSuccess, onError, "BrowserController", "warmUp", []);
  },
  mayLaunchUrl: function (url, onSuccess, onError) {
    exec(onSuccess, onError, "BrowserController", "mayLaunchUrl", [url]);
  }
};
