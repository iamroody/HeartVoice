var screenOrientation = function() {};

screenOrientation.prototype = {
    set : function(str) {
        cordova.exec(function(winParam){}, function(error){alert(error);}, 'ScreenOrientation', "set", [str]);
    },
    detect : function() {
        cordova.exec(function(winParam){}, function(error){alert(error);}, 'ScreenOrientation', "detect", []);
    },
    fullScreen : function(str) {
        cordova.exec(function(winParam){}, function(error){alert(error);}, 'ScreenOrientation', "fullScreen", [str]);
    }
};

window.screenOrientation = new screenOrientation();
