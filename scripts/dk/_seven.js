$(function() {
  	$(document).foundation();
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
		prevText: "",
		nextText: ""
	});

	var curSlide;
	
	$('.flexslider .slides li').on('click', function() {
		$('.loaded-carousel').flexslider({ 
		   	slideshow: false,
		    controlNav: false,
		    directionNav: true,
	        slideToStart: 0,  
	        minItems: 1,
		    touch: true,
		    maxItems: 1,
		    move: 1,
			prevText: "",
		 	nextText: "",
		 	after: function(slider) {
			    $('#videoModal .flex-direction-nav li').eq(1).html(slider.currentSlide + 1);
				stopVideoPlaying(slider);
			},
			start: function(slider) {
			    $('#videoModal .flex-direction-nav li').eq(1).before('<li>' + 1 + '</li>');
			    $('#videoModal .flex-direction-nav li').eq(2).before('<li>' + 'of' + '</li>');
			    $('#videoModal .flex-direction-nav li').eq(3).before('<li>' + slider.count + '</li>');
				$('video,audio').mediaelementplayer({features: ['playpause','progress','current','duration','volume','fullscreen']});
			}
		});
	});
	
	$( ".close-reveal-modal, .reveal-modal-bg" ).click(function() {
		$('iframe').each(function(){
					$(this).attr('src', $(this).attr('src'));
				});
	});

	$('.flexslider .slides').on('click', 'a', function(){
		$('.loaded-carousel .slides').html('');
		var list = [];
		// Get ul element of selected Item
		var myParent = $(this).parents('ul');

		$( myParent.children('li') ).each(function( ) {
			//list.push($(this));
			$('.loaded-carousel .slides').append('<li>' + $(this).children('div').html() + '</li>');
		});

		loadSlider();
	})

	var loadSlider = function() {
		$('.loaded-carousel').removeData("flexslider");
		$('#videoModal .flex-direction-nav li').html('');
		
		$('.loaded-carousel').flexslider({ 
			slideshow: false,
			controlNav: false,
			directionNav: true,
		    slideToStart: 0,  
		    minItems: 1,
			touch: true,
			maxItems: 1,
			move: 1,
			prevText: "",
			nextText: "",
		 	after: function(slider) {
			    $('#videoModal .flex-direction-nav li').eq(1).html(slider.currentSlide + 1);
				loadTitle(slider);
				$('iframe').each(function(){
					$(this).attr('src', $(this).attr('src'));
				});
			},				
			start: function(slider) {
				loadTitle(slider);
			    $('#videoModal .flex-direction-nav li').eq(1).before('<li>' + 1 + '</li>');
			    $('#videoModal .flex-direction-nav li').eq(2).before('<li>' + 'of' + '</li>');
			    $('#videoModal .flex-direction-nav li').eq(3).before('<li>' + slider.count + '</li>');
				$('video,audio').mediaelementplayer({features: ['playpause','progress','current','duration','volume','fullscreen']});
			}
		});
	};
	
	var loadTitle = function(slider){
		var title = slider.find(".flex-active-slide").find(".modal-desc").data("title");
		slider.parents("#videoModal").find(".white").html(title)
	};
	
	var stopVideoPlaying = function(slider){		
		var frame = slider.find('.flex-active-slide > iframe');
		frame.attr('src', frame.attr('src'));
	};	
});