console.log("yay");
var place = 300;

function displayunicode(y) {
	var unicode = y.keyCode;
	if (unicode == 37) {
		//left arrow
		var placenew = $("div#"+(placenew-1)).attr("class");
		console.log(placenew);
	}
	if (unicode == 39) {
		//right arrow
	}
	if (unicode == 38) {
		//up arrow
	}
	if (unicode == 40) {
		//down arrow
	}
}

function placePlayer(newplace) {
	$("div#"+place).attr("class","floor");
	$("div#"+newplace).attr("class","player");
}

AddRoom("hospital");
$("div#"+place).attr("class","player");
