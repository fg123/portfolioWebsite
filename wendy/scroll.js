$(window).scroll(function () { 
	if ($(window).scrollTop() > 174) {
		var w = $(".nav").css("width");
		$(".nav").addClass("fixedMenu");
		$(".nav").width(w);
	}
	else
	{ 
		$(".nav").removeClass("fixedMenu");
	}	

});
$(document).ready(function () { 
	$( '.content' ).scrollspy();
});