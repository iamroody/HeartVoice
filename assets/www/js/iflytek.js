var IFTRecognizer = function() {
};

IFTRecognizer.prototype = {
  init : function(appId) {
    cordova.exec(null, null, 'IFlyTekPlugin', 'init', [appId]);
  },
  setOption : function(options) {
    cordova.exec(null, null, 'IFlyTekPlugin', 'setOption', [options]);     
  },
  setListener : function(name) {
    cordova.exec(null, null, 'IFlyTekPlugin', 'setListener', [name]);      
  },
  start : function(onEnd) {
    cordova.exec(onEnd, null, 'IFlyTekPlugin', 'start', []);
  }
};

window.iftRecognizer = new IFTRecognizer();