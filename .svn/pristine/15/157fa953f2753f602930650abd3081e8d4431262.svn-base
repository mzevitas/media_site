$(window).load(function(){
    $(document).foundation();

    var curId;
    var curGallery;
    var curSlide;

    $('.galleryslider .slides li').on('click', function () {        
        curSlide = $(this).index() + 1;
    });

    $('.galleryslider .slides').on('click', 'a', function () { 
        $('.loaded-carousel .slides').html('');

        var myParent = $(this).parents('ul');

        $(myParent.children('li')).each(function () {
            $('.loaded-carousel .slides').append('<li>' + $(this).children('div').html() + '</li>');
        });

        loadSlider();
    });

    var loadSlider = function () {        
        $('.loaded-carousel').removeData('flexslider');

        $('.videoModal .flex-direction-nav').remove();

        $('.loaded-carousel').flexslider({
            slideshow: false,
            controlNav: false,
            directionNav: true,
            startAt: curSlide - 1,
            minItems: 1,
            touch: true,
            maxItems: 1,
            move: 1,
            prevText: "",
            nextText: "",
            video: true,
            animation: "fade",
            animationSpeed: 0,
            after: function (slider) {
                $('.videoModal .flex-direction-nav li').eq(1).html(slider.currentSlide + 1);
                
                $('iframe').each(function () {
                    $(this).attr('src', $(this).attr('src'));
                });
            },
            start: function (slider) {
                loadTitle(slider);

                $('.videoModal .flex-direction-nav li').eq(1).before('<li>' + curSlide + '</li>');
                $('.videoModal .flex-direction-nav li').eq(2).before('<li>' + 'of' + '</li>');
                $('.videoModal .flex-direction-nav li').eq(3).before('<li>' + slider.count + '</li>');

                $('video, audio').mediaelementplayer({ features: ['playpause', 'progress', 'current', 'duration', 'volume', 'fullscreen'] });
            }
        });
    };


    $(".close-reveal-modal, .reveal-modal-bg").click(function () {
        $('iframe').each(function () {
            $(this).attr('src', $(this).attr('src'));
        });
    });

    $('.viewgallery').on('click', 'a', function () { 
        curSlide = $(this).index() + 1;

        curId = $(this).attr('data-reveal-id');
        curGallery = $('#' + curId);

        loadGallery();
    });

    var loadGallery = function () { 
        curGallery.find('.loaded-carousel').removeData('flexslider');

        curGallery.find('.flex-direction-nav').remove();

        curGallery.find('.loaded-carousel').flexslider({
            slideshow: false,
            controlNav: false,
            directionNav: true,
            startAt: curSlide - 1,
            minItems: 1,
            touch: true,
            maxItems: 1,
            move: 1,
            prevText: "",
            nextText: "",
            video: true,
            animation: "fade",
            animationSpeed: 0,
            after: function (slider) {
                curGallery.find('.flex-direction-nav li').eq(1).html(slider.currentSlide + 1);
                
                curGallery.find('iframe').each(function () {
                    $(this).attr('src', $(this).attr('src'));
                });
            },
            start: function (slider) {                
                loadTitle(slider);

                curGallery.find('.flex-direction-nav li').eq(1).before('<li>' + curSlide + '</li>');
                curGallery.find('.flex-direction-nav li').eq(2).before('<li>' + 'of' + '</li>');
                curGallery.find('.flex-direction-nav li').eq(3).before('<li>' + slider.count + '</li>');
            }
        });
    };

    var loadTitle = function (slider) {
        var title = slider.find(".flex-active-slide").find(".modal-desc").data("title");

        slider.parents(".videoModal").find(".white").html(title);
    };

    var stopVideoPlaying = function (slider) {
        var frame = slider.find('.flex-active-slide > iframe');

        frame.attr('src', frame.attr('src'));
    };
});