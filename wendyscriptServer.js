var code_running = false;
var client_id = 0;
var code_instance;
var console_instance;
var get_compiled = false;

function getQueryParams(qs) {
    var params = {},
        tokens,
        re = /[?&]?([^=]+)=([^&]*)/g;

    while (tokens = re.exec(qs)) {
        params[decodeURIComponent(tokens[1])]
            = decodeURIComponent(tokens[2]);
    }

    return params;
}
var $_GET = getQueryParams(document.location.search);

var server_url = "https://www.student.cs.uwaterloo.ca/~f28guo/";
var has_unloaded = false;
function on_unload() {
	if (!has_unloaded) {
		$.ajax({
			type: "GET",
			url: server_url + "end_client.cgi?" + client_id,
			async: false
		});
		has_unloaded = true;
	}
}
$(document).ready(function () {

	window.addEventListener("unload", on_unload);
	window.addEventListener("beforeunload", on_unload);

	code_instance = $('.CodeMirror')[0].CodeMirror;
	console_instance = $('.CodeMirror')[1].CodeMirror;

	$.get(server_url + "new_client.cgi", function(data) {
		client_id = parseInt(data);
		console.log("Created client: " + client_id);
	});
	if (!$_GET["code"]) {
		$.get("userInputSum.w", function(data) {
			code_instance.setValue(data);	
		});
	}
	else {
		var code = $_GET["code"];
		if (code.endsWith("#wendyScript")) {
			code = code.substring(0, code.indexOf("#wendyScript"));
		}
		code_instance.setValue(atob(code));
	}
	$(".loadCode").click(function(){
		var id = $(this).attr('id');
		$.get(id + ".w", function(data) {
			code_instance.setValue(data);	
		});
	});
	$(".userinput").keypress( function (event) {
		if (event.which == 13 && code_running) {
		var input = $(this).val();
		if (input.length != 0) {
			$(this).val("");	
			jQuery.get(server_url + "input.cgi?" + client_id + "|" + input, function(data) {
			});
		}
		}
	});
	$(".linkToShare").click(function() {
		 $(this).select();
	});
	$("#runBtn").click(function (){
        console_instance.setValue("");
		if (code_running) {			
			jQuery.post(server_url + "stop.cgi?" + client_id, function(data) {
				code_running = false;
                document.getElementById("runBtn").className = "runBtn";
                document.getElementById("runBtn").innerHTML = "Run >";
			});
		}
		else {
			code_running = true;
			get_compiled = true;
			var code = 	code_instance.getValue("\n");
			this.className = "stopBtn";
            this.innerHTML = "Stop";
			jQuery.post(server_url + "run.cgi", { a: client_id + "|" + code },  function(data) {
				document.getElementById("runBtn").className = "runBtn";
                document.getElementById("runBtn").innerHTML = "Run >";
				code_running = false;
			});
			get_console();
		}
	});	
});

function get_console() {
	jQuery.get(server_url + "output.cgi?" + client_id, function(data) {
		console_instance.replaceRange(data, {line: Infinity});
		if(data) { console_instance.execCommand("goDocEnd"); }
		if (code_running) {
			setTimeout(get_console, 10);
		}
	});
};
