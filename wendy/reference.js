// Loop through each h1, 
$(document).ready(function () {
	var final_toc = "<div class='list-group'>";
	var all_heading = $(".content h1, .content h2, .content h3");
	for (var i = 0; i < all_heading.size(); i++) { 
		if ($(all_heading[i]).is("h1")) { 
			if (i != 0) { $(all_heading[i]).before("<a href='#TOP'>Return to top ^</a>"); } 
			final_toc += '<div class="list-group-item"><h4 class="list-group-item-heading">';
			$(all_heading[i]).attr("id", $(all_heading[i]).html());
			final_toc += "<a href='#" + $(all_heading[i]).attr("id") +"'>" + $(all_heading[i]).html() + "</a>";
			final_toc += '</h4> <p class="list-group-item-text" style="margin-top:0px">';
			while ($(all_heading[i + 1]).is("h2")) { 
				$(all_heading[i + 1]).attr("id", $(all_heading[i + 1]).html());
				final_toc += "<a href='#" + $(all_heading[i + 1]).attr("id") +"'> - " + $(all_heading[i + 1]).html() + "</a><br>";
				i++;
				while ($(all_heading[i + 1]).is("h3")) { 
					$(all_heading[i + 1]).attr("id", $(all_heading[i + 1]).html());
					//final_toc += "<a href='#" + $(all_heading[i + 1]).attr("id") +"'> - > " + $(all_heading[i + 1]).html() + "</a><br>";
					i++;
				}
			}
			final_toc += "</p></div>"
		}
	}
	final_toc += "</div>";
	$("#toc").html(final_toc);
});
$(function () {
	$('a[href*="#"]').click(function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 400);
				//console.log($(this).data("samp"));
				return false;
			}
		}
	})
});