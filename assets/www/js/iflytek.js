var IFTUti = function() {
};

IFTUti.prototype = {
  recognizer : function(options, onEnd) {
    cordova.exec(onEnd, null, 'IFlyTekPlugin', 'recognizer', [options]);
  },
  synthesizer : function(options, onEnd) {
    cordova.exec(onEnd, null, 'IFlyTekPlugin', 'synthesizer', [options]);
  }
};

window.iftUti = new IFTUti();