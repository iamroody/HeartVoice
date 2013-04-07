var screenOrientation = function() {};

screenOrientation.prototype = {
    set : function(str, success, fail) {
        cordova.exec(success, fail, 'ScreenOrientation', "set", [str]);
    },
    detect : function(success) {
        cordova.exec(success, null, 'ScreenOrientation', "detect", []);
    }
};

window.screenOrientation = new screenOrientation();
