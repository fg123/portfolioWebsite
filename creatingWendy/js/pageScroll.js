// pageScroll.js
// Written by Felix Guo for WendyScript book
// Controls the sidebar menu and scroll spying and generating sidebar menu.
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
$(document).ready(function(){
    $('img.zoom').hover(function() {
        $(this).addClass('zoomed');
    
    }, function() {
        $(this).removeClass('zoomed');
    });
});
$(document).ready(function () {
	
	var currUrl = document.location.pathname.match(/[^\/]+$/)[0];
	var currChapId = parseInt(currUrl.match(/\d+/)[0], 10);
	var links = "";
	if (currChapId == 1) {
		// Chapter 1
		links += '<a href="index.html" class="list-group-item list-group-item-action list-group-item-danger">< Back to Chapter List</a>';
	}
	else { 
		links += '<a href="chap' + (currChapId - 1) + '.html" class="list-group-item list-group-item-action list-group-item-danger">< Previous Chapter</a>';
	}
	$('.content h1').first().css("margin-top", 0);
	$('.content h1').each(function (index) {
		if (index) {
			// not the first one
			links += '<a href="#' + $(this).attr('id') + '" class="list-group-item list-group-item-action">' + $(this).html() + '</a>';
		}
		else { 
			links += '<a href="#' + $(this).attr('id') + '" class="list-group-item list-group-item-action active">' + $(this).html() + '</a>';
		}
	});
	if (currChapId == 10) {
		// Chapter 10
		links += '<a href="index.html" class="list-group-item list-group-item-action list-group-item-success">Back to Chapter List</a>';
	}
	else { 
		links += '<a href="chap' + (currChapId + 1) + '.html" class="list-group-item list-group-item-action list-group-item-success">Next Chapter ></a>';
	}


	$('.mainmenu').html(links);
	$( '.content' ).scrollspy();
});
$(function() {
	$('.mainmenu > a[href*="#"]:not([href="#"])').click(function () {
		
	if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			
      var target = $(this.hash);
	  target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
		  }, 400);
		//console.log($(this).data("samp"));
		if ($(this).data("samp") != undefined)
		{ 
			$(".codeSampLinks a[href='" + $(this).data("samp") + "']")[0].click();
		}	
        return false;
      }
    }
  });
});