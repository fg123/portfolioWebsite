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
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 400);
        return false;
      }
    }
  });
});