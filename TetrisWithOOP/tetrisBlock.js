class block {
	constructor(bit1,bit2,bit3,bit4){
		this.bit1 = bit1;
		this.bit2 = bit2;
		this.bit3 = bit3;
		this.bit4 = bit4;
		console.log(this.bit1);
		$("div[place=" + this.bit1 + "]").attr("id", "red");
		$("div[place=" + this.bit2 + "]").attr("id", "red");
		$("div[place=" + this.bit3 + "]").attr("id", "red");
		$("div[place=" + this.bit4 + "]").attr("id", "red");
		console.log(this);
		var thisold = this;
	}

	buffer() {
		setTimeout(this.moveblock, time);
	}

	moveblock() {
		console.log(this);
		console.log(this.buffer);
		$("div[place=" + this.bit1 + "]").attr("id", "white");
		$("div[place=" + this.bit2 + "]").attr("id", "white");
		$("div[place=" + this.bit3 + "]").attr("id", "white");
		$("div[place=" + this.bit4 + "]").attr("id", "white");
		var first = $("div[place="+(this.bit1+10)+"]").attr("id");
		var second = $("div[place="+(this.bit2+10)+"]").attr("id");
		var third = $("div[place="+(this.bit3+10)+"]").attr("id");
		var fourth = $("div[place="+(this.bit4+10)+"]").attr("id");
		if (x == 1){
			x = 0;
			spawnblock();
		} else if (first=="red"||second=="red"||third=="red"||fourth=="red"){
			$("div[place=" + this.bit1 + "]").attr("id", "red");
			$("div[place=" + this.bit2 + "]").attr("id", "red");
			$("div[place=" + this.bit3 + "]").attr("id", "red");
			$("div[place=" + this.bit4 + "]").attr("id", "red");
			time = 1000;
			spawnblock();
		} else if (this.bit1<191&&this.bit2<191&&this.bit3<191&&this.bit4<191) {
			this.bit1 += 10;
			this.bit2 += 10;
			this.bit3 += 10;
			this.bit4 += 10;
			$("div[place=" + this.bit1 + "]").attr("id", "red");
			$("div[place=" + this.bit2 + "]").attr("id", "red");
			$("div[place=" + this.bit3 + "]").attr("id", "red");
			$("div[place=" + this.bit4 + "]").attr("id", "red");
			console.log("ready to move");
			this.buffer();
		} else {
			$("div[place=" + this.bit1 + "]").attr("id", "red");
			$("div[place=" + this.bit2 + "]").attr("id", "red");
			$("div[place=" + this.bit3 + "]").attr("id", "red");
			$("div[place=" + this.bit4 + "]").attr("id", "red");
			time = 1000;
			spawnblock();
		}
	}

	up() {
		if (shape=="i") {
			if (phase=="top") {
				if (this.bit3 % 10 == 0 || this.bit3 % 10 == 9 || this.bit3 % 10 == 1) {

				} else {
					var a = $("div[place="+(this.bit4-11)+"]").attr("id");
					var b = $("div[place="+(this.bit2+11)+"]").attr("id");
					var c = $("div[place="+(this.bit1+22)+"]").attr("id");
					if (a !== "red" && b !== "red" && c !== "red") {
						phase = "right";
						$("div[place=" + this.bit1 + "]").attr("id", "white");
						$("div[place=" + this.bit2 + "]").attr("id", "white");
						$("div[place=" + this.bit3 + "]").attr("id", "white");
						$("div[place=" + this.bit4 + "]").attr("id", "white");
						this.bit1 = this.bit1 + 22;
						this.bit2 = this.bit2 + 11;
						this.bit4 = this.bit4 - 11;
						$("div[place=" + this.bit1 + "]").attr("id", "red");
						$("div[place=" + this.bit2 + "]").attr("id", "red");
						$("div[place=" + this.bit3 + "]").attr("id", "red");
						$("div[place=" + this.bit4 + "]").attr("id", "red");
					}
				}
			} else if (phase == "right") {
				var a = $("div[place="+(this.bit4-18)+"]").attr("id");
				var b = $("div[place="+(this.bit3-9)+"]").attr("id");
				var c = $("div[place="+(this.bit1+9)+"]").attr("id");
				if (a !== "red" && b !== "red" && c !== "red") {
					phase = "bottom";
					$("div[place=" + this.bit1 + "]").attr("id", "white");
					$("div[place=" + this.bit2 + "]").attr("id", "white");
					$("div[place=" + this.bit3 + "]").attr("id", "white");
					$("div[place=" + this.bit4 + "]").attr("id", "white");
					this.bit1 = this.bit1 + 9;
					this.bit3 = this.bit3 - 9;
					this.bit4 = this.bit4 - 18;
					$("div[place=" + this.bit1 + "]").attr("id", "red");
					$("div[place=" + this.bit2 + "]").attr("id", "red");
					$("div[place=" + this.bit3 + "]").attr("id", "red");
					$("div[place=" + this.bit4 + "]").attr("id", "red");
				}
			} else if (phase == "bottom") {
				if (this.bit2 % 10 == 0 || this.bit2 % 10 == 9 || this.bit2 % 10 == 1) {

				} else {
					var a = $("div[place="+(this.bit1-11)+"]").attr("id");
					var b = $("div[place="+(this.bit3+11)+"]").attr("id");
					var c = $("div[place="+(this.bit4+22)+"]").attr("id");
					if (a !== "red" && b !== "red" && c !== "red") {
						phase = "left";
						$("div[place=" + this.bit1 + "]").attr("id", "white");
						$("div[place=" + this.bit2 + "]").attr("id", "white");
						$("div[place=" + this.bit3 + "]").attr("id", "white");
						$("div[place=" + this.bit4 + "]").attr("id", "white");
						this.bit1 = this.bit1 - 11;
						this.bit3 = this.bit3 + 11;
						this.bit4 = this.bit4 + 22;
						$("div[place=" + this.bit1 + "]").attr("id", "red");
						$("div[place=" + this.bit2 + "]").attr("id", "red");
						$("div[place=" + this.bit3 + "]").attr("id", "red");
						$("div[place=" + this.bit4 + "]").attr("id", "red");
					}
				}
			} else if (phase == "left") {
				var a = $("div[place="+(this.bit1-18)+"]").attr("id");
				var b = $("div[place="+(this.bit2-9)+"]").attr("id");
				var c = $("div[place="+(this.bit4+9)+"]").attr("id");
				if (a !== "red" && b !== "red" && c !== "red") {
					phase = "top";
					$("div[place=" + this.bit1 + "]").attr("id", "white");
					$("div[place=" + this.bit2 + "]").attr("id", "white");
					$("div[place=" + this.bit3 + "]").attr("id", "white");
					$("div[place=" + this.bit4 + "]").attr("id", "white");
					this.bit1 = this.bit1 - 18;
					this.bit2 = this.bit2 - 9;
					this.bit4 = this.bit4 + 9;
					$("div[place=" + this.bit1 + "]").attr("id", "red");
					$("div[place=" + this.bit2 + "]").attr("id", "red");
					$("div[place=" + this.bit3 + "]").attr("id", "red");
					$("div[place=" + this.bit4 + "]").attr("id", "red");
				}
			}
		} else if (shape == "l") {
			if (phase == "top") {
				if (this.bit4 % 10 == 0) {

				} else {
					$("div[place=" + this.bit1 + "]").attr("id", "white");
					$("div[place=" + this.bit2 + "]").attr("id", "white");
					$("div[place=" + this.bit3 + "]").attr("id", "white");
					$("div[place=" + this.bit4 + "]").attr("id", "white");
					var a = $("div[place="+(this.bit1+22)+"]").attr("id");
					var b = $("div[place="+(this.bit2+11)+"]").attr("id");
					var c = $("div[place="+(this.bit4+9)+"]").attr("id");
					if (a == "red" || b == "red" || c == "red") {
						$("div[place=" + this.bit1 + "]").attr("id", "red");
						$("div[place=" + this.bit2 + "]").attr("id", "red");
						$("div[place=" + this.bit3 + "]").attr("id", "red");
						$("div[place=" + this.bit4 + "]").attr("id", "red");
					} else {
						phase = "right";
						this.bit1 = this.bit1 + 22;
						this.bit2 = this.bit2 + 11;
						this.bit4 = this.bit4 + 9;
						$("div[place=" + this.bit1 + "]").attr("id", "red");
						$("div[place=" + this.bit2 + "]").attr("id", "red");
						$("div[place=" + this.bit3 + "]").attr("id", "red");
						$("div[place=" + this.bit4 + "]").attr("id", "red");
					}
				}
			} else if (phase == "right") {
				if (this.bit3 % 10 == 1){

				} else {
					$("div[place=" + this.bit1 + "]").attr("id", "white");
					$("div[place=" + this.bit2 + "]").attr("id", "white");
					$("div[place=" + this.bit3 + "]").attr("id", "white");
					$("div[place=" + this.bit4 + "]").attr("id", "white");
					var a = $("div[place="+(this.bit1+18)+"]").attr("id");
					var b = $("div[place="+(this.bit2+9)+"]").attr("id");
					var c = $("div[place="+(this.bit4-11)+"]").attr("id");
					if (a == "red" || b == "red" || c == "red") {
						$("div[place=" + this.bit1 + "]").attr("id", "red");
						$("div[place=" + this.bit2 + "]").attr("id", "red");
						$("div[place=" + this.bit3 + "]").attr("id", "red");
						$("div[place=" + this.bit4 + "]").attr("id", "red");
					} else {
						phase = "bottom";
						this.bit1 = this.bit1 + 18;
						this.bit2 = this.bit2 + 9;
						this.bit4 = this.bit4 - 11;
						$("div[place=" + this.bit1 + "]").attr("id", "red");
						$("div[place=" + this.bit2 + "]").attr("id", "red");
						$("div[place=" + this.bit3 + "]").attr("id", "red");
						$("div[place=" + this.bit4 + "]").attr("id", "red");
					}
				}
			} else if (phase == "bottom") {
				if (this.bit3 % 10 == 2) {

				} else {
					$("div[place=" + this.bit1 + "]").attr("id", "white");
					$("div[place=" + this.bit2 + "]").attr("id", "white");
					$("div[place=" + this.bit3 + "]").attr("id", "white");
					$("div[place=" + this.bit4 + "]").attr("id", "white");
					var a = $("div[place="+(this.bit1-22)+"]").attr("id");
					var b = $("div[place="+(this.bit2-11)+"]").attr("id");
					var c = $("div[place="+(this.bit4-9)+"]").attr("id");
					if (a == "red" || b == "red" || c == "red") {
						$("div[place=" + this.bit1 + "]").attr("id", "red");
						$("div[place=" + this.bit2 + "]").attr("id", "red");
						$("div[place=" + this.bit3 + "]").attr("id", "red");
						$("div[place=" + this.bit4 + "]").attr("id", "red");
					} else {
						phase = "left";
						this.bit1 = this.bit1 - 22;
						this.bit2 = this.bit2 - 11;
						this.bit4 = this.bit4 - 9;
						$("div[place=" + this.bit1 + "]").attr("id", "red");
						$("div[place=" + this.bit2 + "]").attr("id", "red");
						$("div[place=" + this.bit3 + "]").attr("id", "red");
						$("div[place=" + this.bit4 + "]").attr("id", "red");
					}
				}
			} else if (phase == "left") {
				if (this.bit3 % 10 == 0) {

				} else {
					$("div[place=" + this.bit1 + "]").attr("id", "white");
					$("div[place=" + this.bit2 + "]").attr("id", "white");
					$("div[place=" + this.bit3 + "]").attr("id", "white");
					$("div[place=" + this.bit4 + "]").attr("id", "white");
					var a = $("div[place="+(this.bit1-18)+"]").attr("id");
					var b = $("div[place="+(this.bit2-9)+"]").attr("id");
					var c = $("div[place="+(this.bit4+11)+"]").attr("id");
					if (a == "red" || b == "red" || c == "red") {
						$("div[place=" + this.bit1 + "]").attr("id", "red");
						$("div[place=" + this.bit2 + "]").attr("id", "red");
						$("div[place=" + this.bit3 + "]").attr("id", "red");
						$("div[place=" + this.bit4 + "]").attr("id", "red");
					} else {
						phase = "top";
						this.bit1 = this.bit1 - 18;
						this.bit2 = this.bit2 - 9;
						this.bit4 = this.bit4 + 11;
						$("div[place=" + this.bit1 + "]").attr("id", "red");
						$("div[place=" + this.bit2 + "]").attr("id", "red");
						$("div[place=" + this.bit3 + "]").attr("id", "red");
						$("div[place=" + this.bit4 + "]").attr("id", "red");
					}
				}
			}
		} else if (shape == "j") {
			if (phase == "top") {
				if (this.bit4 % 10 == 0 || this.bit4 % 10 == 9) {

				} else {
					$("div[place=" + this.bit1 + "]").attr("id", "white");
					$("div[place=" + this.bit2 + "]").attr("id", "white");
					$("div[place=" + this.bit3 + "]").attr("id", "white");
					$("div[place=" + this.bit4 + "]").attr("id", "white");
					var a = $("div[place="+(this.bit1+22)+"]").attr("id");
					var b = $("div[place="+(this.bit2+11)+"]").attr("id");
					var c = $("div[place="+(this.bit3-9)+"]").attr("id");
					if (a == "red" || b == "red" || c == "red") {
						$("div[place=" + this.bit1 + "]").attr("id", "red");
						$("div[place=" + this.bit2 + "]").attr("id", "red");
						$("div[place=" + this.bit3 + "]").attr("id", "red");
						$("div[place=" + this.bit4 + "]").attr("id", "red");
					} else {
						phase = "right";
						this.bit1 = this.bit1 + 22;
						this.bit2 = this.bit2 + 11;
						this.bit3 = this.bit3 - 9;
						$("div[place=" + this.bit1 + "]").attr("id", "red");
						$("div[place=" + this.bit2 + "]").attr("id", "red");
						$("div[place=" + this.bit3 + "]").attr("id", "red");
						$("div[place=" + this.bit4 + "]").attr("id", "red");
					}
				}
			} else if (phase == "right") {
				$("div[place=" + this.bit1 + "]").attr("id", "white");
				$("div[place=" + this.bit2 + "]").attr("id", "white");
				$("div[place=" + this.bit3 + "]").attr("id", "white");
				$("div[place=" + this.bit4 + "]").attr("id", "white");
				var a = $("div[place="+(this.bit1+18)+"]").attr("id");
				var b = $("div[place="+(this.bit2+9)+"]").attr("id");
				var c = $("div[place="+(this.bit3+11)+"]").attr("id");
				if (a == "red" || b == "red" || c == "red") {
					$("div[place=" + this.bit1 + "]").attr("id", "red");
					$("div[place=" + this.bit2 + "]").attr("id", "red");
					$("div[place=" + this.bit3 + "]").attr("id", "red");
					$("div[place=" + this.bit4 + "]").attr("id", "red");
				} else {
					phase = "bottom";
					this.bit1 = this.bit1 + 18;
					this.bit2 = this.bit2 + 9;
					this.bit3 = this.bit3 + 11;
					$("div[place=" + this.bit1 + "]").attr("id", "red");
					$("div[place=" + this.bit2 + "]").attr("id", "red");
					$("div[place=" + this.bit3 + "]").attr("id", "red");
					$("div[place=" + this.bit4 + "]").attr("id", "red");
				}
			} else if (phase == "bottom") {
				if (this.bit4 % 10 == 1 || this.bit4 % 10 == 2) {

				} else {
					$("div[place=" + this.bit1 + "]").attr("id", "white");
					$("div[place=" + this.bit2 + "]").attr("id", "white");
					$("div[place=" + this.bit3 + "]").attr("id", "white");
					$("div[place=" + this.bit4 + "]").attr("id", "white");
					var a = $("div[place="+(this.bit1-22)+"]").attr("id");
					var b = $("div[place="+(this.bit2-11)+"]").attr("id");
					var c = $("div[place="+(this.bit3+9)+"]").attr("id");
					if (a == "red" || b == "red" || c == "red") {
						$("div[place=" + this.bit1 + "]").attr("id", "red");
						$("div[place=" + this.bit2 + "]").attr("id", "red");
						$("div[place=" + this.bit3 + "]").attr("id", "red");
						$("div[place=" + this.bit4 + "]").attr("id", "red");
					} else {
						phase = "left";
						this.bit1 = this.bit1 - 22;
						this.bit2 = this.bit2 - 11;
						this.bit3 = this.bit3 + 9;
						$("div[place=" + this.bit1 + "]").attr("id", "red");
						$("div[place=" + this.bit2 + "]").attr("id", "red");
						$("div[place=" + this.bit3 + "]").attr("id", "red");
						$("div[place=" + this.bit4 + "]").attr("id", "red");
					}
				}
			} else if (phase == "left") {
				$("div[place=" + this.bit1 + "]").attr("id", "white");
				$("div[place=" + this.bit2 + "]").attr("id", "white");
				$("div[place=" + this.bit3 + "]").attr("id", "white");
				$("div[place=" + this.bit4 + "]").attr("id", "white");
				var a = $("div[place="+(this.bit1-18)+"]").attr("id");
				var b = $("div[place="+(this.bit2-9)+"]").attr("id");
				var c = $("div[place="+(this.bit3-11)+"]").attr("id");
				if (a == "red" || b == "red" || c == "red") {
					$("div[place=" + this.bit1 + "]").attr("id", "red");
					$("div[place=" + this.bit2 + "]").attr("id", "red");
					$("div[place=" + this.bit3 + "]").attr("id", "red");
					$("div[place=" + this.bit4 + "]").attr("id", "red");
				} else {
					phase = "top";
					this.bit1 = this.bit1 - 18;
					this.bit2 = this.bit2 - 9;
					this.bit3 = this.bit3 - 11;
					$("div[place=" + this.bit1 + "]").attr("id", "red");
					$("div[place=" + this.bit2 + "]").attr("id", "red");
					$("div[place=" + this.bit3 + "]").attr("id", "red");
					$("div[place=" + this.bit4 + "]").attr("id", "red");
				}
			}
		} else if (shape == "t") {
			if (phase == "top") {
				$("div[place=" + this.bit1 + "]").attr("id", "white");
				$("div[place=" + this.bit2 + "]").attr("id", "white");
				$("div[place=" + this.bit3 + "]").attr("id", "white");
				$("div[place=" + this.bit4 + "]").attr("id", "white");
				var a = $("div[place="+(this.bit1+11)+"]").attr("id");
				var b = $("div[place="+(this.bit2-9)+"]").attr("id");
				var c = $("div[place="+(this.bit4+9)+"]").attr("id");
				if (a == "red" || b == "red" || c == "red") {
					$("div[place=" + this.bit1 + "]").attr("id", "red");
					$("div[place=" + this.bit2 + "]").attr("id", "red");
					$("div[place=" + this.bit3 + "]").attr("id", "red");
					$("div[place=" + this.bit4 + "]").attr("id", "red");
				} else {
					phase = "right";
					this.bit1 = this.bit1 + 11;
					this.bit2 = this.bit2 - 9;
					this.bit4 = this.bit4 + 9;
					$("div[place=" + this.bit1 + "]").attr("id", "red");
					$("div[place=" + this.bit2 + "]").attr("id", "red");
					$("div[place=" + this.bit3 + "]").attr("id", "red");
					$("div[place=" + this.bit4 + "]").attr("id", "red");
				}
			} else if (phase == "right") {
				if (this.bit3 % 10 == 1) {

				} else {
					$("div[place=" + this.bit1 + "]").attr("id", "white");
					$("div[place=" + this.bit2 + "]").attr("id", "white");
					$("div[place=" + this.bit3 + "]").attr("id", "white");
					$("div[place=" + this.bit4 + "]").attr("id", "white");
					var a = $("div[place="+(this.bit1+9)+"]").attr("id");
					var b = $("div[place="+(this.bit2+11)+"]").attr("id");
					var c = $("div[place="+(this.bit4-11)+"]").attr("id");
					if (a == "red" || b == "red" || c == "red") {
						$("div[place=" + this.bit1 + "]").attr("id", "red");
						$("div[place=" + this.bit2 + "]").attr("id", "red");
						$("div[place=" + this.bit3 + "]").attr("id", "red");
						$("div[place=" + this.bit4 + "]").attr("id", "red");
					} else {
						phase = "bottom";
						this.bit1 = this.bit1 + 9;
						this.bit2 = this.bit2 + 11;
						this.bit4 = this.bit4 - 11;
						$("div[place=" + this.bit1 + "]").attr("id", "red");
						$("div[place=" + this.bit2 + "]").attr("id", "red");
						$("div[place=" + this.bit3 + "]").attr("id", "red");
						$("div[place=" + this.bit4 + "]").attr("id", "red");
					}
				}
			} else if (phase == "bottom") {
				$("div[place=" + this.bit1 + "]").attr("id", "white");
				$("div[place=" + this.bit2 + "]").attr("id", "white");
				$("div[place=" + this.bit3 + "]").attr("id", "white");
				$("div[place=" + this.bit4 + "]").attr("id", "white");
				var a = $("div[place="+(this.bit1-11)+"]").attr("id");
				var b = $("div[place="+(this.bit2+9)+"]").attr("id");
				var c = $("div[place="+(this.bit4-9)+"]").attr("id");
				if (a == "red" || b == "red" || c == "red") {
					$("div[place=" + this.bit1 + "]").attr("id", "red");
					$("div[place=" + this.bit2 + "]").attr("id", "red");
					$("div[place=" + this.bit3 + "]").attr("id", "red");
					$("div[place=" + this.bit4 + "]").attr("id", "red");
				} else {
					phase = "left";
					this.bit1 = this.bit1 - 11;
					this.bit2 = this.bit2 + 9;
					this.bit4 = this.bit4 - 9;
					$("div[place=" + this.bit1 + "]").attr("id", "red");
					$("div[place=" + this.bit2 + "]").attr("id", "red");
					$("div[place=" + this.bit3 + "]").attr("id", "red");
					$("div[place=" + this.bit4 + "]").attr("id", "red");
				}
			} else if (phase == "left") {
				if (this.bit3 % 10 == 0) {

				} else {
					$("div[place=" + this.bit1 + "]").attr("id", "white");
					$("div[place=" + this.bit2 + "]").attr("id", "white");
					$("div[place=" + this.bit3 + "]").attr("id", "white");
					$("div[place=" + this.bit4 + "]").attr("id", "white");
					var a = $("div[place="+(this.bit1-9)+"]").attr("id");
					var b = $("div[place="+(this.bit2-11)+"]").attr("id");
					var c = $("div[place="+(this.bit4+11)+"]").attr("id");
					if (a == "red" || b == "red" || c == "red") {
						$("div[place=" + this.bit1 + "]").attr("id", "red");
						$("div[place=" + this.bit2 + "]").attr("id", "red");
						$("div[place=" + this.bit3 + "]").attr("id", "red");
						$("div[place=" + this.bit4 + "]").attr("id", "red");
					} else {
						phase = "top";
						this.bit1 = this.bit1 - 9;
						this.bit2 = this.bit2 - 11;
						this.bit4 = this.bit4 + 11;
						$("div[place=" + this.bit1 + "]").attr("id", "red");
						$("div[place=" + this.bit2 + "]").attr("id", "red");
						$("div[place=" + this.bit3 + "]").attr("id", "red");
						$("div[place=" + this.bit4 + "]").attr("id", "red");
					}
				}
			}
		} else if (shape == "s") {
			if (phase == "top") {
				$("div[place=" + this.bit1 + "]").attr("id", "white");
				$("div[place=" + this.bit2 + "]").attr("id", "white");
				$("div[place=" + this.bit3 + "]").attr("id", "white");
				$("div[place=" + this.bit4 + "]").attr("id", "white");
				var a = $("div[place="+(this.bit2+9)+"]").attr("id");
				var b = $("div[place="+(this.bit3-20)+"]").attr("id");
				var c = $("div[place="+(this.bit4-11)+"]").attr("id");
				if (a == "red" || b == "red" || c == "red") {
					$("div[place=" + this.bit1 + "]").attr("id", "red");
					$("div[place=" + this.bit2 + "]").attr("id", "red");
					$("div[place=" + this.bit3 + "]").attr("id", "red");
					$("div[place=" + this.bit4 + "]").attr("id", "red");
				} else {
					phase = "right";
					this.bit2 = this.bit2 + 9;
					this.bit3 = this.bit3 - 20;
					this.bit4 = this.bit4 - 11;
					$("div[place=" + this.bit1 + "]").attr("id", "red");
					$("div[place=" + this.bit2 + "]").attr("id", "red");
					$("div[place=" + this.bit3 + "]").attr("id", "red");
					$("div[place=" + this.bit4 + "]").attr("id", "red");
				}
			} else if (phase == "right") {
				if (this.bit1 % 10 == 0) {

				} else {
					$("div[place=" + this.bit1 + "]").attr("id", "white");
					$("div[place=" + this.bit2 + "]").attr("id", "white");
					$("div[place=" + this.bit3 + "]").attr("id", "white");
					$("div[place=" + this.bit4 + "]").attr("id", "white");
					var a = $("div[place="+(this.bit2-11)+"]").attr("id");
					var b = $("div[place="+(this.bit3+2)+"]").attr("id");
					var c = $("div[place="+(this.bit4-9)+"]").attr("id");
					if (a == "red" || b == "red" || c == "red") {
						$("div[place=" + this.bit1 + "]").attr("id", "red");
						$("div[place=" + this.bit2 + "]").attr("id", "red");
						$("div[place=" + this.bit3 + "]").attr("id", "red");
						$("div[place=" + this.bit4 + "]").attr("id", "red");
					} else {
						phase = "bottom";
						this.bit2 = this.bit2 - 11;
						this.bit3 = this.bit3 + 2;
						this.bit4 = this.bit4 - 9;
						$("div[place=" + this.bit1 + "]").attr("id", "red");
						$("div[place=" + this.bit2 + "]").attr("id", "red");
						$("div[place=" + this.bit3 + "]").attr("id", "red");
						$("div[place=" + this.bit4 + "]").attr("id", "red");
					}
				}
			} else if (phase == "bottom") {
				$("div[place=" + this.bit1 + "]").attr("id", "white");
				$("div[place=" + this.bit2 + "]").attr("id", "white");
				$("div[place=" + this.bit3 + "]").attr("id", "white");
				$("div[place=" + this.bit4 + "]").attr("id", "white");
				var a = $("div[place="+(this.bit1-11)+"]").attr("id");
				var b = $("div[place="+(this.bit2-20)+"]").attr("id");
				var c = $("div[place="+(this.bit3+9)+"]").attr("id");
				if (a == "red" || b == "red" || c == "red") {
					$("div[place=" + this.bit1 + "]").attr("id", "red");
					$("div[place=" + this.bit2 + "]").attr("id", "red");
					$("div[place=" + this.bit3 + "]").attr("id", "red");
					$("div[place=" + this.bit4 + "]").attr("id", "red");
				} else {
					phase = "left";
					this.bit1 = this.bit1 - 11;
					this.bit2 = this.bit2 - 20;
					this.bit3 = this.bit3 + 9;
					$("div[place=" + this.bit1 + "]").attr("id", "red");
					$("div[place=" + this.bit2 + "]").attr("id", "red");
					$("div[place=" + this.bit3 + "]").attr("id", "red");
					$("div[place=" + this.bit4 + "]").attr("id", "red");
				}
			} else if (phase == "left") {
				if (this.bit4 % 10 == 0) {

				} else {
					$("div[place=" + this.bit1 + "]").attr("id", "white");
					$("div[place=" + this.bit2 + "]").attr("id", "white");
					$("div[place=" + this.bit3 + "]").attr("id", "white");
					$("div[place=" + this.bit4 + "]").attr("id", "white");
					var a = $("div[place="+(this.bit1+1)+"]").attr("id");
					var b = $("div[place="+(this.bit2+12)+"]").attr("id");
					var c = $("div[place="+(this.bit3-1)+"]").attr("id");
					var d = $("div[place="+(this.bit4+10)+"]").attr("id");
					if (a == "red" || b == "red" || c == "red") {
						$("div[place=" + this.bit1 + "]").attr("id", "red");
						$("div[place=" + this.bit2 + "]").attr("id", "red");
						$("div[place=" + this.bit3 + "]").attr("id", "red");
						$("div[place=" + this.bit4 + "]").attr("id", "red");
					} else {
						phase = "top";
						this.bit1 = this.bit1 + 1;
						this.bit2 = this.bit2 + 12;
						this.bit3 = this.bit3 - 1;
						this.bit4 = this.bit4 + 10;
						$("div[place=" + this.bit1 + "]").attr("id", "red");
						$("div[place=" + this.bit2 + "]").attr("id", "red");
						$("div[place=" + this.bit3 + "]").attr("id", "red");
						$("div[place=" + this.bit4 + "]").attr("id", "red");
					}
				}
			}
		} else if (shape == "z") {
			if (phase == "top") {
				$("div[place=" + this.bit1 + "]").attr("id", "white");
				$("div[place=" + this.bit2 + "]").attr("id", "white");
				$("div[place=" + this.bit3 + "]").attr("id", "white");
				$("div[place=" + this.bit4 + "]").attr("id", "white");
				var a = $("div[place="+(this.bit1-9)+"]").attr("id");
				var b = $("div[place="+(this.bit3-11)+"]").attr("id");
				var c = $("div[place="+(this.bit4-2)+"]").attr("id");
				if (a == "red" || b == "red" || c == "red") {
					$("div[place=" + this.bit1 + "]").attr("id", "red");
					$("div[place=" + this.bit2 + "]").attr("id", "red");
					$("div[place=" + this.bit3 + "]").attr("id", "red");
					$("div[place=" + this.bit4 + "]").attr("id", "red");
				} else {
					phase = "right";
					this.bit1 = this.bit1 - 9;
					this.bit3 = this.bit3 - 11;
					this.bit4 = this.bit4 - 2;
					$("div[place=" + this.bit1 + "]").attr("id", "red");
					$("div[place=" + this.bit2 + "]").attr("id", "red");
					$("div[place=" + this.bit3 + "]").attr("id", "red");
					$("div[place=" + this.bit4 + "]").attr("id", "red");
				}
			} else if (phase == "right") {
				if (this.bit3 % 10 == 1) {

				} else {
					$("div[place=" + this.bit1 + "]").attr("id", "white");
					$("div[place=" + this.bit2 + "]").attr("id", "white");
					$("div[place=" + this.bit3 + "]").attr("id", "white");
					$("div[place=" + this.bit4 + "]").attr("id", "white");
					var a = $("div[place="+(this.bit1+20)+"]").attr("id");
					var b = $("div[place="+(this.bit2+9)+"]").attr("id");
					var c = $("div[place="+(this.bit4-11)+"]").attr("id");
					if (a == "red" || b == "red" || c == "red") {
						$("div[place=" + this.bit1 + "]").attr("id", "red");
						$("div[place=" + this.bit2 + "]").attr("id", "red");
						$("div[place=" + this.bit3 + "]").attr("id", "red");
						$("div[place=" + this.bit4 + "]").attr("id", "red");
					} else {
						phase = "bottom";
						this.bit1 = this.bit1 + 20;
						this.bit2 = this.bit2 + 9;
						this.bit4 = this.bit4 - 11;
						$("div[place=" + this.bit1 + "]").attr("id", "red");
						$("div[place=" + this.bit2 + "]").attr("id", "red");
						$("div[place=" + this.bit3 + "]").attr("id", "red");
						$("div[place=" + this.bit4 + "]").attr("id", "red");
					}
				}
			} else if (phase == "bottom") {
				$("div[place=" + this.bit1 + "]").attr("id", "white");
				$("div[place=" + this.bit2 + "]").attr("id", "white");
				$("div[place=" + this.bit3 + "]").attr("id", "white");
				$("div[place=" + this.bit4 + "]").attr("id", "white");
				var a = $("div[place="+(this.bit1-2)+"]").attr("id");
				var b = $("div[place="+(this.bit2-11)+"]").attr("id");
				var c = $("div[place="+(this.bit4-9)+"]").attr("id");
				if (a == "red" || b == "red" || c == "red") {
					$("div[place=" + this.bit1 + "]").attr("id", "red");
					$("div[place=" + this.bit2 + "]").attr("id", "red");
					$("div[place=" + this.bit3 + "]").attr("id", "red");
					$("div[place=" + this.bit4 + "]").attr("id", "red");
				} else {
					phase = "left";
					this.bit1 = this.bit1 - 2;
					this.bit2 = this.bit2 - 11;
					this.bit4 = this.bit4 - 9;
					$("div[place=" + this.bit1 + "]").attr("id", "red");
					$("div[place=" + this.bit2 + "]").attr("id", "red");
					$("div[place=" + this.bit3 + "]").attr("id", "red");
					$("div[place=" + this.bit4 + "]").attr("id", "red");
				}
			} else if (phase == "left") {
				if (this.bit2 % 10 == 1) {

				} else {
					$("div[place=" + this.bit1 + "]").attr("id", "white");
					$("div[place=" + this.bit2 + "]").attr("id", "white");
					$("div[place=" + this.bit3 + "]").attr("id", "white");
					$("div[place=" + this.bit4 + "]").attr("id", "white");
					var a = $("div[place="+(this.bit1-11)+"]").attr("id");
					var b = $("div[place="+(this.bit3+9)+"]").attr("id");
					var c = $("div[place="+(this.bit4+20)+"]").attr("id");
					if (a == "red" || b == "red" || c == "red") {
						$("div[place=" + this.bit1 + "]").attr("id", "red");
						$("div[place=" + this.bit2 + "]").attr("id", "red");
						$("div[place=" + this.bit3 + "]").attr("id", "red");
						$("div[place=" + this.bit4 + "]").attr("id", "red");
					} else {
						phase = "top";
						this.bit1 = this.bit1 - 11;
						this.bit3 = this.bit3 + 9;
						this.bit4 = this.bit4 + 20;
						$("div[place=" + this.bit1 + "]").attr("id", "red");
						$("div[place=" + this.bit2 + "]").attr("id", "red");
						$("div[place=" + this.bit3 + "]").attr("id", "red");
						$("div[place=" + this.bit4 + "]").attr("id", "red");
					}
				}
			}
		}
	}
}