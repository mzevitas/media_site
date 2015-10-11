$(function() {
  	$('.galleryslider').flexslider({
        animation: "slide",
        animationLoop: false,
        itemWidth: 200,
        itemMargin: 10,
        controlNav: false,
        directionNav: true,
        slideshow: false,
        minItems: 2,
        touch: true,
        maxItems: 4,
        move: 1,
        prevText: "",
        nextText: ""
    });

	$('.flexslider').flexslider({
		animation: "slide",
		animationLoop: true,
		controlNav: true,
		directionNav: true,
		slideshow: true,
		minItems: 1,
		touch: true,
		useCSS: Modernizr.touch,
		maxItems: 3,
		prevText: "",
		nextText: "",
		slideshowSpeed: 8000
	});

	var validationMessagesArray = []; 
		
	function loadItems (array, index) {
		var newArray = array; 
		var newIndex = index;
		var itemsInArray = newArray.length;

		var value = Math.min(newIndex, itemsInArray);

		for(var i = 0; i < value; i++) {
			newArray[i].removeClass('hide');
		}
		newArray.splice(0, value);
	}

	loadItems(validationMessagesArray, 6);	

    $(".pink-cta a" ).on( "click", function(event) {
    	event.preventDefault();
    	loadItems(validationMessagesArray, 6);
	});
	
	$("#contact-us").on('click', function(){
		$('#contact-form').submit();
	});
});
