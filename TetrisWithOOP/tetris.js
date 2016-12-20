var x = 0;
var time = 1000;
var n = 0;
var bit1;
var bit2;
var bit3;
var bit4;
var score = 0;
var shape;
var phase;

function displayunicode(y) {
	var unicode = y.keyCode;
	if (unicode == 32) {
		time = 0;
	}
	if (unicode == 37) {
		left();
	}
	if (unicode == 38) {
		up();
	}
	if (unicode == 39) {
		right();
	}
	if (unicode == 40) {
		down();
	}
	if (unicode == 83) {
		if (n > 0) {

		} else {
			n = 1
			spawnblock();
		}
	}
	if (unicode == 73) {
		alert("How to play: you press left and right to move the pieces, and up to rotate them. Space is to drop a block down. Down is to move a block down one square. You can press i again while you are playing to pause the game. If you lose, press r to restart. Do not press r if you are in the middle of a game. If you want to restart during a game, just reload the page. Good luck!");
	}
	if (unicode == 82) {
		x = 1;
		score = 0;
		$("p#gameover").html("");
		for (i=1;i<201;i++) {
			$("div[place=" + i + "]").attr("id", "white");
		}
		spawnblock();
	}
}

function spawnblock() {
	$("span#score").html("<b>Score: "+score+"</b>");
	var a = $("div[place=1]").attr("id");
	var b = $("div[place=2]").attr("id");
	var c = $("div[place=3]").attr("id");
	var d = $("div[place=4]").attr("id");
	var e = $("div[place=5]").attr("id");
	var f = $("div[place=6]").attr("id");
	var g = $("div[place=7]").attr("id");
	var h = $("div[place=8]").attr("id");
	var j = $("div[place=9]").attr("id");
	var k = $("div[place=10]").attr("id");
	if (a=="red"||b=="red"||c=="red"||d=="red"||e=="red"||f=="red"||g=="red"||h=="red"||j=="red"||k=="red") {
		$("p#gameover").html("<h1>Game over! Press r to play again.</h1>");
	} else {
		for (z=1;z<20;z++) {
			var a = $("div[place="+(z*10+1)+"]").attr("id");
			var b = $("div[place="+(z*10+2)+"]").attr("id");
			var c = $("div[place="+(z*10+3)+"]").attr("id");
			var d = $("div[place="+(z*10+4)+"]").attr("id");
			var e = $("div[place="+(z*10+5)+"]").attr("id");
			var f = $("div[place="+(z*10+6)+"]").attr("id");
			var g = $("div[place="+(z*10+7)+"]").attr("id");
			var h = $("div[place="+(z*10+8)+"]").attr("id");
			var j = $("div[place="+(z*10+9)+"]").attr("id");
			var k = $("div[place="+(z*10+10)+"]").attr("id");
			if (a=="red"&&b=="red"&&c=="red"&&d=="red"&&e=="red"&&f=="red"&&g=="red"&&h=="red"&&j=="red"&&k=="red") {
				score = score + 10;
				$("span#score").html("<b>Score: "+score+"</b>");
				$("div[place="+(z*10+1)+"]").attr("id", "white");
				$("div[place="+(z*10+2)+"]").attr("id", "white");
				$("div[place="+(z*10+3)+"]").attr("id", "white");
				$("div[place="+(z*10+4)+"]").attr("id", "white");
				$("div[place="+(z*10+5)+"]").attr("id", "white");
				$("div[place="+(z*10+6)+"]").attr("id", "white");
				$("div[place="+(z*10+7)+"]").attr("id", "white");
				$("div[place="+(z*10+8)+"]").attr("id", "white");
				$("div[place="+(z*10+9)+"]").attr("id", "white");
				$("div[place="+(z*10+10)+"]").attr("id", "white");
				for (w=0;w<(z*10);w++) {
					bit1 = $("div[place="+(z*10-w)+"]").attr("id");
					if (bit1=="red") {
						bit1 = z*10-w;
						$("div[place="+bit1+"]").attr("id", "white");
						$("div[place="+(bit1+10)+"]").attr("id", "red");
					}
				}
			}
		}
		shape = Math.floor((Math.random() * 7) + 1)
		if (shape==1) {
			shape = "o";
			phase = "top";
			bit1 = 5;
			bit2 = 6;
			bit3 = 15;
			bit4 = 16;
		}
		if (shape==2) {
			shape = "i";
			phase = "top";
			bit1 = 5;
			bit2 = 15;
			bit3 = 25;
			bit4 = 35;
		}
		if (shape==3) {
			shape = "t";
			phase = "top";
			bit1 = 5;
			bit2 = 14;
			bit3 = 15;
			bit4 = 16;
		}
		if (shape==4) {
			shape = "j";
			phase = "top";
			bit1 = 6;
			bit2 = 16;
			bit3 = 25;
			bit4 = 26;
		}
		if (shape==5) {
			shape = "l";
			phase = "top";
			bit1 = 5;
			bit2 = 15;
			bit3 = 25;
			bit4 = 26;
		}
		if (shape==6) {
			shape = "z";
			phase = "top";
			bit1 = 5;
			bit2 = 6;
			bit3 = 16;
			bit4 = 17;
		}
		if (shape==7) {
			shape = "s";
			phase = "top";
			bit1 = 5;
			bit2 = 6;
			bit3 = 14;
			bit4 = 15;
		}
		var r = $("div[place="+bit1+"]").attr("id");
		var s = $("div[place="+bit2+"]").attr("id");
		var t = $("div[place="+bit3+"]").attr("id");
		var u = $("div[place="+bit4+"]").attr("id");
		if (r=="red"||s=="red"||t=="red"||u=="red") {
			$("p#gameover").html("<h1>Game over! Press r to play again.</h1>");
		} else {
			const blocky = new block(bit1,bit2,bit3,bit4);
			setTimeout(blocky.moveblock, 1000);
		}
	}
}

function left() {
	$("div[place=" + bit1 + "]").attr("id", "white");
	$("div[place=" + bit2 + "]").attr("id", "white");
	$("div[place=" + bit3 + "]").attr("id", "white");
	$("div[place=" + bit4 + "]").attr("id", "white");
	var first = $("div[place="+(bit1-1)+"]").attr("id");
	var second = $("div[place="+(bit2-1)+"]").attr("id");
	var third = $("div[place="+(bit3-1)+"]").attr("id");
	var fourth = $("div[place="+(bit4-1)+"]").attr("id");
	if (bit1 % 10 == 1||bit2 % 10 == 1||bit3 % 10 == 1||bit4 % 10 == 1) {
		$("div[place=" + bit1 + "]").attr("id", "red");
		$("div[place=" + bit2 + "]").attr("id", "red");
		$("div[place=" + bit3 + "]").attr("id", "red");
		$("div[place=" + bit4 + "]").attr("id", "red");
	} else if (first=="red"||second=="red"||third=="red"||fourth=="red") {
		$("div[place=" + bit1 + "]").attr("id", "red");
		$("div[place=" + bit2 + "]").attr("id", "red");
		$("div[place=" + bit3 + "]").attr("id", "red");
		$("div[place=" + bit4 + "]").attr("id", "red");
	} else {
		$("div[place=" + bit1 + "]").attr("id", "white");
		$("div[place=" + bit2 + "]").attr("id", "white");
		$("div[place=" + bit3 + "]").attr("id", "white");
		$("div[place=" + bit4 + "]").attr("id", "white");
		bit1 = bit1 - 1;
		bit2 = bit2 - 1;
		bit3 = bit3 - 1;
		bit4 = bit4 - 1;
		$("div[place=" + bit1 + "]").attr("id", "red");
		$("div[place=" + bit2 + "]").attr("id", "red");
		$("div[place=" + bit3 + "]").attr("id", "red");
		$("div[place=" + bit4 + "]").attr("id", "red");
	}
}

function right() {
	$("div[place=" + bit1 + "]").attr("id", "white");
	$("div[place=" + bit2 + "]").attr("id", "white");
	$("div[place=" + bit3 + "]").attr("id", "white");
	$("div[place=" + bit4 + "]").attr("id", "white");
	var first = $("div[place="+(bit1+1)+"]").attr("id");
	var second = $("div[place="+(bit2+1)+"]").attr("id");
	var third = $("div[place="+(bit3+1)+"]").attr("id");
	var fourth = $("div[place="+(bit4+1)+"]").attr("id");
	if (bit1 % 10 == 0||bit2 % 10 ==0||bit3 % 10 == 0||bit4 % 10 == 0) {
		$("div[place=" + bit1 + "]").attr("id", "red");
		$("div[place=" + bit2 + "]").attr("id", "red");
		$("div[place=" + bit3 + "]").attr("id", "red");
		$("div[place=" + bit4 + "]").attr("id", "red");
	} else if (first=="red"||second=="red"||third=="red"||fourth=="red") {
		$("div[place=" + bit1 + "]").attr("id", "red");
		$("div[place=" + bit2 + "]").attr("id", "red");
		$("div[place=" + bit3 + "]").attr("id", "red");
		$("div[place=" + bit4 + "]").attr("id", "red");
	} else {
		$("div[place=" + bit1 + "]").attr("id", "white");
		$("div[place=" + bit2 + "]").attr("id", "white");
		$("div[place=" + bit3 + "]").attr("id", "white");
		$("div[place=" + bit4 + "]").attr("id", "white");
		bit1 = bit1 + 1;
		bit2 = bit2 + 1;
		bit3 = bit3 + 1;
		bit4 = bit4 + 1;
		$("div[place=" + bit1 + "]").attr("id", "red");
		$("div[place=" + bit2 + "]").attr("id", "red");
		$("div[place=" + bit3 + "]").attr("id", "red");
		$("div[place=" + bit4 + "]").attr("id", "red");
	}
}

function down() {
	$("div[place=" + bit1 + "]").attr("id", "white");
	$("div[place=" + bit2 + "]").attr("id", "white");
	$("div[place=" + bit3 + "]").attr("id", "white");
	$("div[place=" + bit4 + "]").attr("id", "white");
	var first = $("div[place="+(bit1+10)+"]").attr("id");
	var second = $("div[place="+(bit2+10)+"]").attr("id");
	var third = $("div[place="+(bit3+10)+"]").attr("id");
	var fourth = $("div[place="+(bit4+10)+"]").attr("id");
	if (first=="red"||second=="red"||third=="red"||fourth=="red"){
		$("div[place=" + bit1 + "]").attr("id", "red");
		$("div[place=" + bit2 + "]").attr("id", "red");
		$("div[place=" + bit3 + "]").attr("id", "red");
		$("div[place=" + bit4 + "]").attr("id", "red");
	} else if (bit1<191&&bit2<191&&bit3<191&&bit4<191) {
		bit1 = bit1 + 10;
		bit2 = bit2 + 10;
		bit3 = bit3 + 10;
		bit4 = bit4 + 10;
		$("div[place=" + bit4 + "]").attr("id", "red");
		$("div[place=" + bit3 + "]").attr("id", "red");
		$("div[place=" + bit2 + "]").attr("id", "red");
		$("div[place=" + bit1 + "]").attr("id", "red");
	}
}

function up() {
	blocky.up();
}