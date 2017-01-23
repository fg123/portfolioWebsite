// codesamp.js
// Written by Felix Guo by the WendyScript documentation
// Controls the code sample tabs
var currentSamp;
$(document).ready(function () {
	$(".codesamp").each(function (index) {
		//console.log(index);
		if (index != 0) {
			$(this).hide();
		}
		else
		{ 
			currentSamp = "#" + $(this).attr("id");
		}	
	});
	$(".codeSampLinks a").click(function (event) {
		event.preventDefault();
		$(currentSamp).hide();
		$('a[href="' + currentSamp + '"]').parent().removeClass("active");
		$($(this).attr("href")).show();
		currentSamp = $(this).attr("href");
		$('a[href="' + currentSamp + '"]').parent().addClass("active");
		
	});
});