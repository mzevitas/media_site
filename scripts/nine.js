$(function() {
  	$(document).foundation();
  	
  	$("#carousel").flexslider({
		animation: "slide",
		useCSS: false,
		controlNav: false,
		animationLoop: false,
		smoothHeight: true,
		slideshow: false,
		itemWidth: 200,
		itemMargin: 10,
		minItems: 2,
		touch: true,
		maxItems: 10,
		move: 1,
		asNavFor: '#slider',
		prevText: "",
		nextText: ""
	});
		
	$('#slider').flexslider({
		animation: "slide",
		useCSS: false,
		controlNav: false,
		animationLoop: false,
		slideshow: false,
		smoothHeight: true,
		sync: "#carousel",
		prevText: "",
		nextText: "",
		start: function(slider){
          	},
        before: function(slider){
        	}
	});
	
	$('video,audio').mediaelementplayer({features: ['playpause','progress','current','duration','volume','fullscreen']});
});
