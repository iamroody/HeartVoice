$(document).ready(function(){
    document.addEventListener("deviceready", onDeviceReady, false);
});

function onDeviceReady(){
    $("#init_screen").hide();
    $("#main_screen").show();
}

function startDetect(){
//    window.iftRecognizer.init("51236408");
    iftRecognizer.init();
//    window.iftRecognizer.setOption({
//        engine: 'sms',
//        sampleRate: 'rate8k'
//    });
//
//    window.iftRecognizer.setListener("onResults");
//
//    window.iftRecognizer.start(function(response) {
//      console.log("response: " + response.errorCode + ", msg: " + response.message);
//    });
}

function onResults(response) {
  console.log('isLast: ' + response.isLast);
  response.results.forEach(function(recognizerResult) {
    console.log(recognizerResult.text + "##" + recognizerResult.confidence);
    $("#text").append(recognizerResult.text + "##");
  })
}