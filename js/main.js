$(document).ready(function(){    
    
    $("#cover").addClass("slideDown");
    $("header").addClass("fade");
    $(".sec01 .cover").addClass("")
    
    $(".menu-btn").on("click", function () {

        $(this).toggleClass("on");

        var toggle = $(this).hasClass("on");

        if (toggle === true) {
            $("nav").stop().animate({
                "left": "0px"
            }, 700);
        } else {
            $("nav").stop().animate({
                "left": "-100%"
            }, 700)
        }

    }) /*메뉴버튼 클릭이벤트(mobile) 모음*/

    $(" nav .top-menu").on("click", function () {
        var winWidth = $(window).width()

        if (winWidth < 1200) {
            $(this).find(".sub-menu").stop().slideToggle();
            $(this).siblings().find(".sub-menu").stop().slideUp();
            $(this).toggleClass("round").siblings().removeClass("round");
        }

    }) /*탑메뉴 클릭이벤트(mobile) 모음*/

    // $(선택자).is(); 선택자의 상태를 확인하는 메서드
    // var a =$(선택자).is(:animated); true / false
    // if(!a){실행}

    function dropdown() {
        var winWidth = $(window).width();

        if (winWidth >= 1200) {
//            $(".top_menu").off("click");
            //            $(".top_menu").on("mouseover", function () {
            //                $(".sub_menu").stop().slideDown();
            //                console.log("bbb");
            //            }).on("mouseout", function () {
            //                $(".sub_menu").stop().slideUp();
            //                console.log("Aaa");
            //
            //            });

            $("nav").css("left", "50%");
            $("nav .sub-menu").css("display","none");
                        
        } else {
            //            $(".top_menu").off("mouseover");
            //            $(".top_menu").off("mouseout");
            //            $(".top_menu").on("click", function () {
            //                $(this).find(".sub_menu").stop().slideToggle();
            //                $(this).siblings().find(".sub_menu").stop().slideUp();
            //                $(this).toggleClass("round").siblings().removeClass("round");
            //            })
            var navStat = $("nav").css("left");
                navStat = parseInt(navStat);
            if(navStat !== 0){
                $("nav").css("left", "-100%");
            }
        }
    }

    dropdown();
    $(window).on("resize", dropdown);
});

    