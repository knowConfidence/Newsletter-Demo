$(document).ready(function(){

	resizeCard();

	$(window).resize(function(){

		resizeCard();

	});

});

function resizeCard(){

	var card = $(".card");

	var i_height = $(".image").outerHeight();
	var t_height = $(".info").outerHeight();
	var height = 0;

	if($(".image").position().left == $(".info").position().left){

		height = i_height + t_height;
	}
	else if(t_height > i_height){

		height = t_height;
	}
	else{

		height = i_height;
	}

	card.css("height", height+10);
}