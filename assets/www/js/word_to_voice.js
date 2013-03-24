$(document).ready(function(){
    $(".remove-all-text").click(function(){
        $("#synthesize_content").val('');
    });
});

function onPlayBegin(){
    $("#synthesize-button").html("正<br>在<br>朗<br>读<br>...")
    $("#synthesize-button").css('font-size','16px')
}
function onPlayEnd(){
    $("#synthesize-button").html("朗<br>读")
}
