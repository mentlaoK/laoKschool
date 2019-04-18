$(document).ready(function(){
    // 轮播区鼠标移入模板显示逻辑
    $("#lb_div1_lis1,#lb_div2_divs1").hover(function (){  
            $("#lb_div2_divs1").show();  
        },function (){  
            $("#lb_div2_divs1").hide();  
        });
    $("#lb_div1_lis2,#lb_div2_divs2").hover(function (){  
            $("#lb_div2_divs2").show();  
        },function (){  
            $("#lb_div2_divs2").hide();  
        });
    $("#lb_div1_lis3,#lb_div2_divs3").hover(function (){  
            $("#lb_div2_divs3").show();  
        },function (){  
            $("#lb_div2_divs3").hide();  
        });
    $("#lb_div1_lis4,#lb_div2_divs4").hover(function (){  
            $("#lb_div2_divs4").show();  
        },function (){  
            $("#lb_div2_divs4").hide();  
        });    
}); 