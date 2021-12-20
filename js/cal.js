$(document).ready(function () {
    var thisYear = new Date().getFullYear();
    var thisMonth = new Date().getMonth()+1;
    var lastDate = new Date(thisYear, thisMonth, 0).getDate();
    
    var today = new Date().getDate();
    

    $(".sec02 .month").text(thisMonth + "월");

    for (i = 0; i < lastDate; i++) {
        $(".sec02 .calander-bar").append(`
            <li>
                <a href="#">
                    <p>${i+1}</p>
                </a>
            </li>
        `)
    }
    
    
    // $(".sec02 .arrow.left").on("click",function(){

    //     thisMonth--
        
    //     console.log(thisMonth);
    //     if(thisMonth<thisMonth){
    //         alert("현재월 기준 이전달까지 이동가능합니다")
    //     }
        
    // })
    
   $(".calander-wrapper .calander-bar").find("li").eq(today - 1).addClass("today")

    
    
})
