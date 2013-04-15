function initCarousel() {
    carousel=$("#carousel").carousel({
        pagingDiv: "carousel_dots",
        pagingCssName: "carousel_paging2",
        pagingCssNameSelected: "carousel_paging2_selected",
        preventDefaults:false,
        glue:5,
        pagingFunction: function(index) {
            if(index == 3) {
                setTimeout(function(){
                   $("#jQUi").show();
                   $("#carousel_container").remove();
                }, 2000)
            }
        }
    });
}

function showIntro() {
    if (window.localStorage.getItem("logged") != "yes") {
       $("#carousel_container").show();
       window.localStorage.setItem("logged", "yes");
       initCarousel();
    } else {
        $("#jQUi").show();
    }
}