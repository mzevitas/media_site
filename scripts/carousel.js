/*global define */
define([], function () {
    'use strict';
    $(window).load(function() {
		  $('.flexslider').flexslider({
		    animation: "slide",
		    animationLoop: false,
		    itemWidth: 200,                			
		    itemMargin: 10,
		    controlNav: false,
		    slideshow: false,
		    minItems: 2,
		    touch: true,
		    maxItems: 4,
		    move: 1,
		  });
	});
});