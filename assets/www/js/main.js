$(document).ready(function(){
    initialApp();
    document.addEventListener("deviceready", onDeviceReady, false);
//    onDeviceReady();
});

function initialApp() {
    $.ui.showNavMenu = false;
    $.ui.removeFooterMenu();
    $.ui.backButtonText = "返回";

    initCommonSentences();

    $("#main").removeAttr("js-scrolling");

    $(".remove-all-text").on("click", function(){
       $("#synthesize_content").val('');
       $("#text").text('');
    });

    $(".feedback").on("click", function(){
        window.plugins.childBrowser.showWebPage("https://jinshuju.net/f/tCdN5E");
    })
}

function onDeviceReady() {
    screenOrientation.detect();
}

function startRecognizer(){
    if (checkConnection() == false) return;
    var options = {
        appId: '51236408',
        sampleRate: 'rate8k',
        listener: 'onResults'
    };
    $("#text").empty();
    $("#synthesize_content").empty();

    iftUti.recognizer(options, function(response){
        console.log("response: " + response.errorCode + ", msg: " + response.message);
    });
}

function startSynthesizer(){
    if ($("#synthesize_content").val() == '') return;
    if (checkConnection() == false) return;
    $("#circularG").show();
    var options = {
        appId: '51236408',
        voiceName: 'xiaoyan',
        content: $("#synthesize_content").val()
    };

    iftUti.synthesizer(options, function(response){
        console.log("response: " + response.errorCode + ", msg: " + response.message);
        navigator.notification.vibrate(500);
    });
}

function onPlayEnd(){
    $("#circularG").hide();
}

function onResults(response) {
  console.log('isLast: ' + response);
  response.results.forEach(function(recognizerResult) {
    console.log(recognizerResult.text + "##" + recognizerResult.confidence);
    $("#text").append(recognizerResult.text);
    $("#synthesize_content").append(recognizerResult.text);
  })
  navigator.notification.vibrate(500);
}

function orientationChanged(orientation) {
    if (orientation == 'Landscape' && $("#header .i-write.active").length == 1) {
        $("#header .you-speak").click();
    } else if (orientation == 'Portrait' && $("#header .you-speak.active").length == 1) {
        $("#header .i-write").click();
    }
}

function syncToText(){
    screenOrientation.set("portrait");

    $("#synthesize_content").val($("#text").text());
}

function syncToVoice(){
    screenOrientation.set("sensorLandscape");

    $("#text").text($("#synthesize_content").val());
}

function checkConnection() {
    if(navigator.network.connection.type == Connection.NONE) {
        alert("请开启网络链接！");
        return false;
    }
    return true
}

