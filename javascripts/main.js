$(function(){
      $("#slides").slidesjs({
      	height: 800,
        navigation: {
        	active: false
        },
	play: {
      		effect: "slide",
      		interval: 4000,
      		auto: true,
      		swap: true,
      		pauseOnHover: false,
      		restartDelay: 2500
    	}
      });
    });
