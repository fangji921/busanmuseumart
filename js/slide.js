$(document).ready(function(){
    
    $(".slide-wrapper").slick({
        arrows:false,
        infinite:true,
        speed:500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:3000,
        responsive:[
            {
                breakpoint:1200,
                settings:{
                    slidesToShow:1,
                }
            }
        ]
    })

    $(".slide-wrapper").on("afterChange", function() {
        $(".sec03 .slide-wrapper .slick-active").eq(2).addClass("event").siblings().removeClass("event");
        $(".sec04 .slide-wrapper .slick-active").eq(0).addClass("event").siblings().removeClass("event");
    })
    $(".sec03 .slide-wrapper .slick-active").eq(2).addClass("event").siblings().removeClass("event");
    $(".sec04 .slide-wrapper .slick-active").eq(0).addClass("event").siblings().removeClass("event");
})