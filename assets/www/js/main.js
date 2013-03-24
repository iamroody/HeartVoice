$(document).ready(function(){
    document.addEventListener("deviceready", onDeviceReady, false);
//    onDeviceReady();
});

function onDeviceReady(){
    $.ui.backButtonText = "取消";
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
    $("#text").append(recognizerResult.text + "##");
  })
}

var commonSentences = {
    '旅行': [
        '请问哪里有旅馆?',
        '请问我该怎么去火车站？'
    ],
    '生活': [
        '附近哪里有饭馆？'
    ]
};

function initCommonSentences() {
  var categories = $('.categories');

  var count = 0;
  for (var category in commonSentences) {
    var id = 'category_' + count;
    count++;
    var categoryElem = $("<a href='#" + id + "' class='button' data-transition='fade'>" + category + "</a>");
    categories.append(categoryElem);
    initCategoryPanel(category, id);
  }

}

function initCategoryPanel(category, id) {
    var categorySentencesElem = $("<div class='panel sentences'><ul></ul></div>");
    categorySentencesElem.attr('id', id);
    categorySentencesElem.attr('title', category);

    var sentenceElems = $.each(commonSentences[category], function(index, sentence) {
      categorySentencesElem.find('ul').append("<li><a href='#main' data-transition='fade'>" + sentence + "</a></li>");
    });
    categorySentencesElem.appendTo($('#content'));

    categorySentencesElem.find('li a').on('click', function() {
      $('#synthesize_content').val($(this).text());
    });
}
