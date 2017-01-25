// Javascript Bootstrap Syntax Highlighting for the Wendy Scripting Language
// Designed by Felix Guo

var keywords = ["let", "set", "true", "false", "ret", "none", "dec", "inc"];
var operators = ["loop", "input", "and", "or", "if", "else", "+", "-",
	"*", "/", "==", ">=", "<=", "<", ">", "=>"];

function isFunctionId(lst, curID)
{ 
	curID++;
	while (curID < lst.length)
	{ 
		if (!(/\s/.test(lst[curID])))
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
		if (!(/\s/.test(lst[curID])))
		{ 		
			return lst[curID] == "let" || lst[curID] == "set" || lst[curID] == "inc" || lst[curID] == "dec";
		}	
		
		curID--;
	}	
	return false;
}
$(document).ready(function () { 
$("code").not(".nostyle").each(function () { 
	var origtokens = $(this).text().match(/[^(\s);"\/\[\]]+|(\/)\1|[\d]+|[.("\s\;\)\[\]]/g);
	var tokens = origtokens.slice(0);
	for (var i = 0; i < tokens.length; i++)
	{ 
		//console.log(tokens[i].charAt(0));
		//console.log(tokens[i].charAt(tokens[i].length - 1));
		if (/[\s{}();]/.test(tokens[i])) // is a whitespace char
		{

		}
		else if (keywords.indexOf(tokens[i]) != -1) {
			tokens[i] = "<span class='keyword'>" + tokens[i] + "</span>";
		}
		
		else if (operators.indexOf(tokens[i]) != -1) {
			tokens[i] = "<span class='operator'>" + tokens[i] + "</span>";
		}
		else if (!isNaN(tokens[i])) {
			tokens[i] = "<span class='number'>" + tokens[i] + "</span>";
		}
		else if (tokens[i] == '"') {
			// advance until other " or end 
			tokens[i] = "<span class='string'>" + tokens[i];
			i++;
			while (i < tokens.length)
			{ 
				if (tokens[i] == '"') { i++; break; }
				i++;
			}	
			i--;
			tokens[i] = tokens[i] + "</span>";
		}
		else if (tokens[i] == '//') { 
			tokens[i] = "<span class='comment'>" + tokens[i];
			i++;
			while (i < tokens.length)
			{ 
				if (tokens[i] == '\n') { i++; break; }
				i++;
			}	
			i--;
			tokens[i] = tokens[i] + "</span>";
		}
		else
		{ 
			
			//console.log(isFunctionLet(tokens, i));
			if (isFunctionId(origtokens, i) || isFunctionLet(origtokens, i))
			{
				tokens[i] = "<span class='identifier'>" + tokens[i] + "</span>";	
			 }
			else {
				//tokens[i] = "<span class=''>" + tokens[i] + "</span>";
			}
		}	
			
	}	
	$(this).html(tokens.join(''));
	
	/*for (var i = 0; i < keywords.length; i++)
	{ 
		$(this).html(replaceArr($(this).html(), keywords[i], "keyword"));
	}	
	for (var i = 0; i < operators.length; i++)
	{ 
		$(this).html(replaceArr($(this).html(), operators[i], "operator"));
	}*/
});
});

// replaceArr(orig, key, classToApply) replaces key in orig applying the given 
//   class.
// replaceArr: Str Str[] Str -> Str
function replaceArr(orig, key, classToApply)
{ 
	var r = RegExp("(?<!<[^>]*)" + key + "(?<![^>]*<)", "g",  "i");
	return orig.replace(r,
		"<span class='" + classToApply + "'>" + key + "</span>");
}