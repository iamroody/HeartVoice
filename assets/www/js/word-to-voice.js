$(document).ready(function(){
    $(".remove-all-text").click(function(){
        $("#synthesize_content").val('');
    });
});

function onPlayBegin(){
    $(".loading-image").hide();
    $(".voice-gif").show();
    $("#synthesize-button").css("background-position", "-410px -4px");

}
function onPlayEnd(){
    $(".voice-gif").hide();
    $("#synthesize-button").css("background-position", "2px -4px");
}
