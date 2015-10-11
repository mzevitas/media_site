/*global define */
define([], function () {
    'use strict';
    $(window).load(function(){
      // Vimeo API nonsense
      var player = document.getElementById('player_1');
      $f(player).addEvent('ready', ready);

      function addEvent(element, eventName, callback) {
        (element.addEventListener) ? element.addEventListener(eventName, callback, false) : element.attachEvent(eventName, callback, false);
      }

      function ready(player_id) {
        var froogaloop = $f(player_id);

        froogaloop.addEvent('play', function(data) {
          $('#slider').flexslider("pause");
        });

        froogaloop.addEvent('pause', function(data) {
          $('#slider').flexslider("play");
        });
      }

      // Call fitVid before FlexSlider initializes, so the proper initial height can be retrieved.
  
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
		
		$('#slider').fitVids().flexslider({
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
            	$('body').removeClass('loading');
          	},
          	before: function(slider){
            	$f(player).api('pause');
          	}
		});
    });
});