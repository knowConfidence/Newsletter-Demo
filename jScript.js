$(document).ready(function(){

	resizeCard();

	$(window).resize(function(){

		resizeCard();

	});

});

function resizeCard(){

	$(".card").each(function(){
		
		var card = $(this);

		var i_height = card.find(".image").outerHeight();
		var t_height = card.find(".info").outerHeight();
		var height = 0;

		if(t_height > i_height){

			height = t_height;
		}
		else{

			height = i_height;
		}

		card.css("height", height);
	});

}