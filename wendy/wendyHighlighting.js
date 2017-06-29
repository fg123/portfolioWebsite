// Javascript Bootstrap Syntax Highlighting for the Wendy Scripting Language
// Designed by Felix Guo

var keywords = ["let", "in", "true", "false", "ret", "none", "dec", "inc", "struct", "req", "input", "time", "assert"];
var operators = ["for", "and", "or", "if", "else", "+", "-", "\\",
	"*", "/", "==", ">=", "<=", "<", ">", "=>"];

function isFunctionId(lst, curID)
{ 
	curID++;
	while (curID < lst.length)
	{ 
		if (!(/\s/.test(lst[curID])) && lst[curID] != "<i>" && lst[curID] != "</i>")
		{ 		
			return lst[curID] == "(";
		}	
		curID++;
	}	
	return false;
}
function isFunctionLet(lst, curID)
{ 
	curID--;
	while (curID >= 0)
	{ 
		if (!(/\s/.test(lst[curID])) && lst[curID] != "<i>" && lst[curID] != "</i>")
		{ 		
			return lst[curID] == "let" || lst[curID] == "set" || lst[curID] == "inc" || lst[curID] == "dec";
		}	
		
		curID--;
	}	
	return false;
}
$(document).ready(function () {
	$("code").not("h3 code").not(".nostyle").not(".cpp").each(function () {
		highlight(this); 
	});
	$(".references code").not(".nolink").click(function () {
		window.location.href = "reference.html?q=" + $(this).text().replace(' ', '-');
	 });
});
function highlight(obj)
{ 
	var origtokens = $(obj).html().match(/\<i\>|[^(\s);"\/\[\]< >]+|(\/)\1|\/|[\d]+|<\/i\>|[.("\s\;\)\[\]\<\>]/g);
	if (origtokens != null) {
		var tokens = origtokens.slice(0);
		for (var i = 0; i < tokens.length; i++) {
			//console.log(tokens[i].charAt(0));
			//console.log(tokens[i].charAt(tokens[i].length - 1));
			if (/[\s{}();]/.test(tokens[i]) || tokens[i] == "<i>" || tokens[i] == "</i>") // is a whitespace char
			{

			}
			else if (keywords.indexOf(tokens[i]) != -1) {
				tokens[i] = "<span class='wkeyword'>" + tokens[i] + "</span>";
			}
		
			else if (operators.indexOf(tokens[i]) != -1) {
				tokens[i] = "<span class='woperator'>" + tokens[i] + "</span>";
			}
			else if (!isNaN(tokens[i])) {
				tokens[i] = "<span class='wnumber'>" + tokens[i] + "</span>";
			}
			else if (tokens[i] == '"') {
				// advance until other " or end 
				tokens[i] = "<span class='wstring'>" + tokens[i];
				i++;
				while (i < tokens.length) {
					if (tokens[i] == '"') { i++; break; }
					i++;
				}
				i--;
				tokens[i] = tokens[i] + "</span>";
			}
			else if (tokens[i] == '//') {
				tokens[i] = "<span class='wcomment'>" + tokens[i];
				i++;
				while (i < tokens.length) {
					if (tokens[i] == '\n') { i++; break; }
					i++;
				}
				i--;
				tokens[i] = tokens[i] + "</span>";
			}
			else {
			
				//console.log(isFunctionLet(tokens, i));
				if (isFunctionId(origtokens, i) || isFunctionLet(origtokens, i)) {
					tokens[i] = "<span class='widentifier'>" + tokens[i] + "</span>";
				}
				else {
					//tokens[i] = "<span class=''>" + tokens[i] + "</span>";
				}
			}
		}
		$(obj).html(tokens.join(''));
	}	
}
// replaceArr(orig, key, classToApply) replaces key in orig applying the given 
//   class.
// replaceArr: Str Str[] Str -> Str
function replaceArr(orig, key, classToApply)
{ 
	var r = RegExp("(?<!<[^>]*)" + key + "(?<![^>]*<)", "g",  "i");
	return orig.replace(r,
		"<span class='" + classToApply + "'>" + key + "</span>");
}
