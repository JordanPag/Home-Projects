console.log("yay");
var place = 300;

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

AddRoom("hospital");
$("div#"+place).attr("class","player");
