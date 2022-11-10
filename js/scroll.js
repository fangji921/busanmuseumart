$(document).ready(function(){

$(window).on("scroll",function(){

    var scrTop=$(this).scrollTop();
    var viewPort=$(this).height();

    if(scrTop>=$(".sec03").offset().top-viewPort/2 && scrTop<$(".sec04").offset().top-viewPort/2){
        
        $(".sec03 .text-wrapper").addClass("up");
        $(".sec03 .lec-wrapper").addClass("translate");

    }else if(scrTop>=$(".sec04").offset().top-viewPort/2 && scrTop<$(".sec05").offset().top-viewPort/2){

        $(".sec04 .text-wrapper").addClass("up");
        $(".sec04 .vr-wrapper").addClass("translate");

    }else if(scrTop>=$(".sec05").offset().top-viewPort/2 && scrTop<$("footer").offset().top){

        $(".sec05 .title").addClass("up");
        $(".sec05 .article-wrapper").addClass("up");

    }

});

var startPos = null;
var scr;
$(".sec02 .calander-wrapper").on("mousedown", function(e) {
    startPos = e.pageX;
    scr = $(this).scrollLeft();
})

$(".sec02 .calander-wrapper").on("mousemove", function(e){
    var currentPos = e.pageX;
    var distance = startPos - currentPos;
        distance = Math.abs(distance);

    var direction = startPos - currentPos;
    if(direction > 0 && startPos){//swipe left
        $(this).scrollLeft(scr + distance);
    } else if(direction < 0 && startPos){//swipe right
        $(this).scrollLeft(scr - distance);
    }
})

$(".sec02 .calander-wrapper").on("mouseup", function() {
    startPos = null
})



})