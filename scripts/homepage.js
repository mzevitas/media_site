$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors:['headPage','firstPage', 'secondPage', 'thirdPage',  'fifthPage', 'sixthPage', 'seventhPage'],
         // menu: '#myMenu',
         menu: true,
         sectionsColor: ['','', '', '',  '#bc357b', '',''],
         navigation: true,
         css3: true,
         scrollingSpeed: 800,
         scrollBar: false,
         responsiveWidth: 900,
         responsiveHeight: 600,
         fitToSection: true,
         resize: true,


            fitToSectionDelay: 200,



// normalScrollElements: '#section9',




// afterResize: function() {
//                     b.resizeFix(), y.resizeFix(), w.resizeFix()
//                 },

       
  
         onLeave: function(anchors, index, nextIndex, direction){
                     

        if(index === 1){
               $('#fixedForm').hide("slide", { direction: "up" }, 500);
               $('#moveTo').hide();
          }
          else if(index == 2 && direction =='up'){
               $('#fixedForm').show("slide", { direction: "up" }, 500);

            }else if(index === 5){
               $('#fixedForm').hide("slide", { direction: "up" }, 500);
          }else if(index === 6){
               $('#fixedForm').hide("slide", { direction: "up" }, 500);

          }else if(index === 7){
               $('#fixedForm').hide("slide", { direction: "up" }, 500);
          }else if(index === 8){
               $('#fixedForm').hide("slide", { direction: "up" }, 500);
          }else {
            $('#fixedForm').show("slide", { direction: "down" }, 800);
            $('#moveTo').show();
          }
                $('#fullpage').css('transform', 'translate3d(0px, 0px, 0px)');
      },
      afterLoad: function(anchors, index){
          if(index === 1){
               $('#moveDown').hide();
          }else if(index === 2 ){
               $('#moveDown').hide();
          }else if(index === 3){
               $('#moveDown').hide();
          }else if(index === 7){
               $('#moveDown').hide();
          }else if(index === 8){
               $('#moveDown').hide();
          }else {
            $('#moveDown').show();
          }
      }
    });
});

$(document).on('click', '#moveDown', function(){
  $.fn.fullpage.moveSectionDown();
});

$(document).on('click', '#moveTo', function(){
  $.fn.fullpage.moveTo('headPage', 1);
});
