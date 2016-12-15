console.log("yay");
var place = 300;

function displayunicode(y) {
	var unicode = y.keyCode;
	if (unicode == 37) {
		//left arrow
		var placenew = $("div#"+(place-1)).hasClass("floor");
		console.log(placenew);
	}
	if (unicode == 39) {
		//right arrow
		var placenew = $("div#"+(place+1)).hasClass("floor");
		console.log(placenew);
	}
	if (unicode == 38) {
		//up arrow
		var placenew = $("div#"+(place-32)).hasClass("floor");
		console.log(placenew);
	}
	if (unicode == 40) {
		//down arrow
		var placenew = $("div#"+(place+32)).hasClass("floor");
		console.log(placenew);
	}
}

function placePlayer(newplace) {
	$("div#"+place).attr("class","floor");
	$("div#"+newplace).attr("class","player");
}

AddRoom("hospital");
$("div#"+place).attr("class","player");
