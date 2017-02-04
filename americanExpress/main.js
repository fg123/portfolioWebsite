$(document).ready(function () {
	$(".overlay-text-image").hide();
	$(".overlay-text-title").hide();
	setTimeout(function () {
		$(".overlay-text-image").show();
		$(".overlay-text-title").show();
		$(".overlay-text-image").addClass("animated fadeInLeft");
		$(".overlay-text-title").addClass("animated fadeInRight");
	}, 1000);

});