$(document).ready(function(){
    document.addEventListener("deviceready", onDeviceReady, false);
});

function onDeviceReady(){
    $("#init_screen").hide();
    $("#main_screen").show();
}

function startRecognizer(){
    var options = {
        appId: '51236408',
        sampleRate: 'rate8k',
        listener: 'onResults'
    };

    iftUti.recognizer(options, function(response){
        console.log("response: " + response.errorCode + ", msg: " + response.message);
    });
}

function startSynthesizer(){
    var options = {
        appId: '51236408',
        voiceName: 'vixying',
        content: $("#synthesize_content").val()
    };

    iftUti.synthesizer(options, function(response){
        console.log("response: " + response.errorCode + ", msg: " + response.message);
    });
}

function onResults(response) {
  $("#text").html(JSON.stringify(response));
//  console.log('isLast: ' + response);
//  response.results.forEach(function(recognizerResult) {
//    console.log(recognizerResult.text + "##" + recognizerResult.confidence);
//    $("#text").append(recognizerResult.text + "##");
//  })
}