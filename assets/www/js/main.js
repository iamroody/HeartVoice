$(document).ready(function(){
    $.ui.showNavMenu = false;
    $.ui.removeFooterMenu();
    document.addEventListener("deviceready", onDeviceReady, false);
});

function onDeviceReady() {
    $.ui.loadContent("#main",false,false,"fade");
    screenOrientation.detect();
}

function startRecognizer(){
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
    $("#synthesize-button").html("<img src='img/loading.gif' class='loading-icon'>");
    var options = {
        appId: '51236408',
        voiceName: 'xiaoyan',
        content: $("#synthesize_content").val()
    };

    iftUti.synthesizer(options, function(response){
        console.log("response: " + response.errorCode + ", msg: " + response.message);
    });
}

function onResults(response) {
  console.log('isLast: ' + response);
  response.results.forEach(function(recognizerResult) {
    console.log(recognizerResult.text + "##" + recognizerResult.confidence);
    $("#text").append(recognizerResult.text);
    $("#synthesize_content").append(recognizerResult.text);
  })
}

function clickWithParams() {
    $("#header .you-speak").bind("click",function () {
        $("#text").text($("#synthesize_content").val());
    });
    $("#header .i-write").bind("click", function () {
        $("#synthesize_content").val($("#text").text());
    });
}

function orientationChanged(orientation) {
    if (orientation == 'Landscape' && $("#header .i-write.active").length == 1) {
        $("#header .you-speak").click();
        screenOrientation.set("sensorLandscape");
    } else if (orientation == 'Portrait' && $("#header .you-speak.active").length == 1) {
        $("#header .i-write").click();
        screenOrientation.set("portrait");
    }
}
