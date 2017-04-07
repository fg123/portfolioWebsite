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
