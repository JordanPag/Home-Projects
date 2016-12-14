console.log("yay");
var place = 100;

function displayunicode(y) {
	var unicode = y.keyCode;
	if (unicode == 37) {
    //left arrow
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

$("div#"+place).attr("class","player");
