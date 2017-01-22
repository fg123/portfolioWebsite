$(window).scroll(fixCheck);
$(window).resize(fixCheck);
function fixCheck() { 
	if ($(window).scrollTop() > 174 && $(window).width() > 992) {
		var w = $(".nav").css("width");
		$(".nav").addClass("fixedMenu");
		$(".nav").width(w);
	}
	else
	{ 
		$(".nav").removeClass("fixedMenu");
	}	
	if ($(window).width() < 992) {
		$(".nav").hide();
	}
	else
	{ 
		$(".nav").show();
	}	
}
$(document).ready(function () { 
	$( '.content' ).scrollspy();
});