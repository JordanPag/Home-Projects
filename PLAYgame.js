console.log("yay");
var place = 300;

function advance(){
	console.log("advance");
	$("div.door").attr("class","door-o");
}

function displayunicode(y) {
	var unicode = y.keyCode;
	if (unicode == 37) {
		//left arrow
		var placenew = $("div#"+(place-1)).hasClass("floor");
		if(placenew==true){
			placePlayer(place-1);
		}
		else{
			placenew = $("div#"+(place-1)).hasClass("obj");
			if(placenew==true){
				placePlayer(place-1);
				points += 1;
				console.log(points);
				if(points==5){
					advance();
				}
			}
		}
	}
	if (unicode == 39) {
		//right arrow
		var placenew = $("div#"+(place+1)).hasClass("floor");
		if(placenew==true){
			placePlayer(place+1);
		}
		else{
			placenew = $("div#"+(place+1)).hasClass("obj");
			if(placenew==true){
				placePlayer(place+1);
				points += 1;
				console.log(points);
				if(points==5){
					advance();
				}
			}
		}
	}
	if (unicode == 38) {
		//up arrow
		var placenew = $("div#"+(place-32)).hasClass("floor");
		if(placenew==true){
			placePlayer(place-32);
		}
		else{
			placenew = $("div#"+(place-32)).hasClass("obj");
			if(placenew==true){
				placePlayer(place-32);
				points += 1;
				console.log(points);
				if(points==5){
					advance();
				}
			}
		}
	}
	if (unicode == 40) {
		//down arrow
		var placenew = $("div#"+(place+32)).hasClass("floor");
		if(placenew==true){
			placePlayer(place+32);
		}
		else{
			placenew = $("div#"+(place+32)).hasClass("obj");
			if(placenew==true){
				placePlayer(place+32);
				points += 1;
				console.log(points);
				if(points==5){
					advance();
				}
			}
		}
	}
}

function placePlayer(newplace) {
	$("div#"+place).attr("class","floor");
	$("div#"+newplace).attr("class","player");
	place = newplace;
}

AddRoom("hospital");
$("div#"+place).attr("class","player");
