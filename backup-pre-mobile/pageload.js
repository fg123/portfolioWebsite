var current = ".portfolio";
var speed = 200;
$(document).ready(function() {
	current = window.location.hash;
	current = current.replace("#", ".");
	if(current == "")
	{
		current = ".portfolio";
	}
	$(".about").hide();
	$(".portfolio").hide();
	$(".contact").hide();
	update();
	
	$(".portfolioDescription").hide();
 	$(".portfolioBig").mouseenter(function(){
 		$(this).children("#hoverShowContent").animate({opacity: "0"}, 100, "linear", function(){
 			$(this).hide();
	 		$(this).parent().children(".portfolioDescription").css("opacity", "0");
			$(this).parent().children(".portfolioDescription").show();
			
			$(this).parent().children(".portfolioDescription").animate({opacity: "100"}, 100, "linear");
 		});
		/*$(this).children(".portfolioDescription").show();
		$(this).children("#hoverShowContent").hide();*/
	});
	$(".portfolioBig").mouseleave(function(){
		$(this).children(".portfolioDescription").animate({opacity: "0"}, 100, "linear", function(){
 			$(this).hide();
	 		$(this).parent().children("#hoverShowContent").css("opacity", "0");
			$(this).parent().children("#hoverShowContent").show();
			
			$(this).parent().children("#hoverShowContent").animate({opacity: "100"}, 100, "linear");
 		});
		
	});

});
function clickIt(clickParam)
{
	console.log(current);
	if(current != clickParam)
	{
	if(current == ".about")
	{
		current = clickParam;
		$(".about").slideUp(speed, function() {update()});
	}
	else if(current == ".portfolio")
	{
		current = clickParam;
		$(".portfolio").slideUp(speed, function() {update()});
	}	
	else if(current == ".contact")
	{
		current = clickParam;
		$(".contact").slideUp(speed, function() {update()});
	}
	}	
}
function update()
{
	$(current).slideDown(speed);
}
