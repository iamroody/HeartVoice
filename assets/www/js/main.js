$(document).ready(function(){
    document.addEventListener("deviceready", onDeviceReady, false);
//    onDeviceReady();
});

function onDeviceReady(){
    initCommonSentences();
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
  console.log('isLast: ' + response);
  response.results.forEach(function(recognizerResult) {
    console.log(recognizerResult.text + "##" + recognizerResult.confidence);
    $("#text").append(recognizerResult.text + "##");
  })
}

function initCommonSentences() {
  var commonSentences = {
    '旅行': [
        '请问哪里有旅馆?',
        '请问我该怎么去火车站？'
    ],
    '生活': [
        '附近哪里有饭馆？'
    ]
  }

  var categories = $('.categories');

  var count = 0;
  for (var category in commonSentences) {
    var id = 'category_' + count;
    count++;
    var categoryElem = $("<a href='#" + id + "' class='button'>" + category + "</a>");
    categories.append(categoryElem);

    var categorySentencesElem = $("<div class='panel'><ul></ul></div>");
    categorySentencesElem.attr('id', id);
    categorySentencesElem.attr('title', category);

    var sentenceElems = $.each(commonSentences[category], function(index, sentence) {
      categorySentencesElem.find('ul').append("<li>" + sentence + "</li>");
    });
    categorySentencesElem.appendTo($('#content'));
  }

}
