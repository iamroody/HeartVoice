function initCarousel() {
    carousel=$("#carousel").carousel({
        pagingDiv: "carousel_dots",
        pagingCssName: "carousel_paging2",
        pagingCssNameSelected: "carousel_paging2_selected",
        preventDefaults:false,
        glue:5
    });
}

function showIntro() {
    if (window.localStorage.getItem("logged") == "yes") {
       console.log("enter this");
       $("#carousel").show();
       $("#carousel_dots").show();
       $("#jQUi").hide();
       initCarousel();
       window.localStorage.setItem("logged", "yes");
    }
}