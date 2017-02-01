$.urlParam = function(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results==null){
       return null;
    }
    else{
       return results[1] || 0;
    }
}
var filename = $.urlParam('q');
if (filename != null)
{
	window.document.title = filename + ": WendyScript";
	$(".reftitle").html(filename + ": Reference");
	$.get("references/" + filename + ".html", function (data) { 
		$(".content").html(data);
		$("code").not(".nostyle").each(function () { highlight(this); });
		$("code").not(".nolink").click(function () {
			window.location.href = "reference.html?q=" + $(this).text().replace(' ', '-');
	 	});
	}).fail(function(){ 
  		invalid();
	});
}
else
{ 
	invalid();
}	
function invalid()
{ 
	$(".content").html("<center><h2>Invalid URL</h2></center><br><br>");
}