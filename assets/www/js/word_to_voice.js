$(document).ready(function(){
    $(".remove-all-text").click(function(){
        $("#synthesize_content").val('');
    });
});

function onPlayBegin(){
//    $("#synthesize-button").html("正<br>在<br>朗<br>读<br>...")
    $("#synthesize-button").css("background-position", "-412px -4px");
}
function onPlayEnd(){
    $("#synthesize-button").css("background-position", "0px -4px");
}
