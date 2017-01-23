// scroll.js
// Written by Felix Guo by the WendyScript documentation
// Controls the sidebar menu and scroll spying.
$(window).scroll(fixCheck);
$(window).resize(fixCheck);
function fixCheck() { 
	if ($(window).scrollTop() > 174 && $(window).width() > 992) {
		var w = $(".mainmenu").css("width");
		$(".mainmenu").addClass("fixedMenu");
		$(".mainmenu").width(w);
	}
	else
	{ 
		$(".mainmenu").removeClass("fixedMenu");
	}	
	if ($(window).width() < 992) {
		$(".mainmenu").hide();
	}
	else
	{ 
		$(".mainmenu").show();
	}	
}
$(document).ready(function () { 
	$( '.content' ).scrollspy();
});
$(function() {
  $('.mainmenu > a[href*="#"]:not([href="#"])').click(function() {
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