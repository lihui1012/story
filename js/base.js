//判断性别
$(".sexs input:checked").parent().addClass("selected");
$(".sexs span").click(function(){
	var value=$(this).find("input:checked").attr("id");
	if(value=="girl" || value=="boy"){
		$(this).addClass("selected").siblings("span").removeClass("selected");
	}
})
