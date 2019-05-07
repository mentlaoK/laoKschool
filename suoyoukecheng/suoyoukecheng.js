$(document).ready(function(){
    //搜索功能
    //实时筛选，不用点击按钮  
	var input_content = "";  
	setInterval(function(){  
	    input_content = $('#input_content').val().toLowerCase();//获取文本框输入  
	    if($.trim(input_content) != ""){  
	            $(".content_view li").hide().filter("li:contains('"+input_content+"')").show();  
	    }else{  
	        $('li').show();//当删除文本框的内容时，又重新显示表格所有内容  
	    }  
	},100); 

}); 
