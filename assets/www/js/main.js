$(document).ready(function(){
    document.addEventListener("deviceready", onDeviceReady, false);
//    onDeviceReady();
});

function onDeviceReady(){
    $.ui.backButtonText = "取消";
    $.ui.showNavMenu = false;
    $.ui.removeFooterMenu();
}

function startRecognizer(){
    console.log('start------------------');
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

function setScreenOrientation(){
//    screenOrientation.set("landscape");
}

function startSynthesizer(){
    $("#synthesize-button").html("<img src='img/loading.gif' class='loading-icon'>");
    var options = {
        appId: '51236408',
        voiceName: 'xiaoyan',
        content: $("#synthesize_content").val() + 'a'     // hack: 最后一个字母发不出音
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

