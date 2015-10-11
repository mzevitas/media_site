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
    
	var myArrays = {
		arr : [],
		arr2 : []
	}

	$('.templ-box:first .hide').each(function() {
		myArrays.arr.push($(this));
	});

	$('.templ-box:last .hide').each(function() {
		myArrays.arr2.push($(this));
	});

	function loadItems (array, index) {
//		var newArray = array; 
//		var newIndex = index;
//		var itemsInArray = newArray.length;
//        var value = Math.min(newIndex, itemsInArray);
//        
//        for(var i = 0; i < value; i++) {
//			newArray[i].removeClass('hide');
//		}
//		newArray.splice(0, value);
        var i = 1;
        $('.templ-box:first .networkItem').each(function() {
		    if (i <= index)
            {
                $(this).removeClass("hide");
            }
            i = i + 1;
    	});

	}

    function resetArray()
    {
        var i = 1;
        $('.templ-box:first .networkItem').each(function() {
		    if (i > 12)
            {
                $(this).addClass("hide");
            }
            i = i + 1;
    	});
    }

	loadItems(myArrays.arr, 12);
	//loadItems(myArrays.arr2, 12);

//    $(".pink-cta:first a" ).on( "click", function(event) {
//        alert("1");
//    	event.preventDefault();
//    	loadItems(myArrays.arr, 500);
//        //change pink-cta to pink-cta-less
//        $("#networkListBtn").removeClass("pink-cta");
//        $("#networkListBtn").addClass("pink-cta-less");
//	});

     $(".pink-cta:first a" ).on( "click", function(event) {
        event.preventDefault();
    	
        var btnClass = $("#networkListBtn").attr('class');
        try
        {
            if (btnClass.indexOf("less-cta") > 0)
            {
                resetArray();
                $("#networkListBtn").removeClass("less-cta");
                $("#networkListBtn").addClass("pink-cta");
                $("#emViewAll").html("View All");
            }
            else
            {
                loadItems(myArrays.arr, 500);
                $("#networkListBtn").removeClass("pink-cta");
                $("#networkListBtn").addClass("less-cta");
                $("#emViewAll").html("View Less");
            }
        }
        catch(err)
        {}
	});


//    $(".pink-cta-less:first a" ).on( "click", function(event) {
//        alert("1");
//    	event.preventDefault();
//    	loadItems(myArrays.arr, 12);
//        //change pink-cta to pink-cta-less
//        $("#networkListBtn").removeClass("pink-cta-less");
//        $("#networkListBtn").addClass("pink-cta");
//	});


//	$(".pink-cta:last a" ).on( "click", function(event) {
//        alert("2");
//    	event.preventDefault();
//    	loadItems(myArrays.arr2, 12);
//	});
	 
	$("#selectnav1").on('change', function(){	
        if (this.children[this.selectedIndex].attributes.value.nodeValue != '')
        {
            window.location.href = this.children[this.selectedIndex].attributes.value.nodeValue;
        }
     });
	
	$("#selectnav2, #selectnav3").on('change', function() {	        
        $('#search-form').submit();
    });	

	$(".view-all").on('click', function(){
        var form = $('#search-form');

        form.append("<input type='hidden' name='viewAll' value='true'/>");
        form.submit();
	});
	
	$("#contact-us").on('click', function(){
		$('#contact-form').submit();
	});
});