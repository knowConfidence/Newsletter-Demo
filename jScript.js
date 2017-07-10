$(document).ready(function(){

	resizeCard();

	$(window).resize(function(){

		resizeCard();

	});

});

function resizeCard(){

	$(".v1").find(".w_image").addClass("f_left");
	$(".v1").find(".w_text").addClass("f_right");

	$(".v2").find(".w_image").addClass("f_right");
	$(".v2").find(".w_text").addClass("f_left");

	$(".wrapper").each(function(){
		
		var image = $(this).find(".w_image");
		var text = $(this).find(".w_text");

		image.removeClass("w_cen");
		text.removeClass("w_cen");

		if(image.outerHeight() > text.outerHeight()){
			text.addClass("w_cen");
		}
		else{
			image.addClass("w_cen");
		}
		
	});

}