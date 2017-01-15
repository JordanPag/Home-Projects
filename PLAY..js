var hospital = ["row"];
var bedroom = [""];
var office = [""];
var classroom = [""];
var points = 0;

function AddFloor(room, x) {
  for (z=0;z<x;z++) {
    var rom = eval(room);
    rom.push("floor");
  }
}

function AddRoom(room) {
  points = 0;
  $("div.grid").html("");
  var num = 0;
  var rem = eval(room);
  for (y=0;y<(rem.length);y++) {
    if (rem[y]=="row") {
      $("div.grid").append("<div class='row'>");
    } else if (rem[y]=="rowend") {
      $("div.grid").append("</div>");
    } else {
      $("div.grid").append("<div class='"+rem[y]+"' id='"+num+"'></div>");
      num += 1;
    }
  }
} 

function AddRow(room,blocks) {
  var rom = eval(room);
  rom.push("row");
  for (x=0;x<32;x++) {
    if (blocks[x]=="o") {
      rom.push("obj");
    } else if (blocks[x]=="f") {
      rom.push("floor");
    } else if (blocks[x]=="d") {
      rom.push("door");
    } else if (blocks[x]=="w") {
      rom.push(room+"wall");
    }
  }
  rom.push("rowend");
}

//row 1
hospital.push("row");
AddFloor("hospital", 10);
hospital.push("h-wall");
hospital.push("door");
hospital.push("door");
hospital.push("h-wall");
AddFloor("hospital", 18);
hospital.push("rowend");
//row 2
hospital.push("row");
AddFloor("hospital", 10);
hospital.push("h-wall");
AddFloor("hospital", 2);
hospital.push("h-wall");
AddFloor("hospital", 18);
hospital.push("rowend");
//row 3
hospital.push("row");
AddFloor("hospital", 10);
hospital.push("h-wall");
AddFloor("hospital", 2);
hospital.push("h-wall");
hospital.push("h-wall");
hospital.push("h-wall");
hospital.push("h-wall");
hospital.push("h-wall");
AddFloor("hospital", 14);
hospital.push("rowend");
//row 4
hospital.push("row");
AddFloor("hospital", 7);
hospital.push("h-wall");
hospital.push("h-wall");
hospital.push("h-wall");
AddFloor("hospital", 7);
hospital.push("h-wall");
hospital.push("h-wall");
hospital.push("h-wall");
AddFloor("hospital", 12);
hospital.push("rowend");
//row 5
hospital.push("row");
AddFloor("hospital", 5);
hospital.push("rowend");
hospital.push("h-wall");
hospital.push("h-wall");
hospital.push("h-wall");
AddFloor("hospital", 11);
hospital.push("h-wall");
hospital.push("h-wall");
AddFloor("hospital", 11);
hospital.push("rowend");
//row 6
hospital.push("row");
AddFloor("hospital", 2);
hospital.push("h-wall");
hospital.push("h-wall");
hospital.push("h-wall");
hospital.push("h-wall");
AddFloor("hospital", 15);
hospital.push("h-wall");
hospital.push("h-wall");
AddFloor("hospital", 9);
hospital.push("rowend");
//row 7
hospital.push("row");
AddFloor("hospital", 1);
hospital.push("h-wall");
hospital.push("h-wall");
AddFloor("hospital", 19);
hospital.push("h-wall");
hospital.push("h-wall");
AddFloor("hospital", 8);
hospital.push("rowend");
//row 8
hospital.push("row");
hospital.push("floor");
hospital.push("h-wall");
AddFloor("hospital", 21);
hospital.push("h-wall");
hospital.push("h-wall");
AddFloor("hospital", 7);
hospital.push("rowend");
//row 9
hospital.push("row");
hospital.push("h-wall");
AddFloor("hospital", 5);
hospital.push("obj");
AddFloor("hospital", 17);
hospital.push("h-wall");
hospital.push("rowend");
hospital.push("h-wall");
hospital.push("h-wall");
AddFloor("hospital", 5);
hospital.push("rowend");
//row 10
hospital.push("row");
hospital.push("h-wall");
AddFloor("hospital", 24);
hospital.push("obj");
hospital.push("h-wall");
hospital.push("h-wall");
AddFloor("hospital", 4);
hospital.push("rowend");
//row 11
hospital.push("row");
hospital.push("h-wall");
AddFloor("hospital", 26);
hospital.push("h-wall");
hospital.push("h-wall");
AddFloor("hospital", 3);
hospital.push("rowend");
//row 12
hospital.push("row");
hospital.push("h-wall");
AddFloor("hospital", 27);
hospital.push("h-wall");
hospital.push("h-wall");
AddFloor("hospital", 2);
hospital.push("rowend");
//row 13
hospital.push("row");
hospital.push("h-wall");
AddFloor("hospital", 28);
hospital.push("h-wall");
hospital.push("h-wall");
AddFloor("hospital", 1);
hospital.push("rowend");
//row 14
hospital.push("row");
hospital.push("h-wall");
AddFloor("hospital", 29);
hospital.push("h-wall");
AddFloor("hospital", 1);
hospital.push("rowend");
//row 15
hospital.push("row");
hospital.push("h-wall");
AddFloor("hospital", 11);
hospital.push("obj");
AddFloor("hospital", 17);
hospital.push("h-wall");
AddFloor("hospital", 1);
hospital.push("rowend");
//row 16
hospital.push("row");
hospital.push("door");
AddFloor("hospital", 10);
hospital.push("h-wall");
hospital.push("h-wall");
hospital.push("h-wall");
AddFloor("hospital", 16);
hospital.push("h-wall");
hospital.push("floor");
hospital.push("rowend");
//row 17
hospital.push("row");
hospital.push("door");
AddFloor("hospital", 10);
hospital.push("h-wall");
hospital.push("h-wall");
hospital.push("h-wall");
AddFloor("hospital", 16);
hospital.push("h-wall");
hospital.push("floor");
hospital.push("rowend");
//row 18
hospital.push("row");
hospital.push("door");
AddFloor("hospital", 10);
hospital.push("h-wall");
hospital.push("h-wall");
hospital.push("h-wall");
AddFloor("hospital", 16);
hospital.push("h-wall");
hospital.push("floor");
hospital.push("rowend");
//row 19
hospital.push("row");
hospital.push("h-wall");
AddFloor("hospital", 10);
hospital.push("h-wall");
hospital.push("h-wall");
hospital.push("h-wall");
AddFloor("hospital", 16);
hospital.push("h-wall");
hospital.push("floor");
hospital.push("rowend");
//row 20
hospital.push("row");
hospital.push("h-wall");
AddFloor("hospital", 10);
hospital.push("h-wall");
hospital.push("h-wall");
hospital.push("h-wall");
AddFloor("hospital", 15);
hospital.push("obj");
hospital.push("h-wall");
hospital.push("floor");
hospital.push("rowend");
//row 21
hospital.push("row");
hospital.push("h-wall");
AddFloor("hospital", 29);
hospital.push("h-wall");
hospital.push("floor");
hospital.push("rowend");
//row 22
hospital.push("row");
hospital.push("h-wall");
AddFloor("hospital", 29);
hospital.push("h-wall");
hospital.push("floor");
hospital.push("rowend");
//row 23
hospital.push("row");
hospital.push("h-wall");
AddFloor("hospital", 29);
hospital.push("h-wall");
hospital.push("floor");
hospital.push("rowend");
//row 24
hospital.push("row");
hospital.push("h-wall");
AddFloor("hospital", 29);
hospital.push("h-wall");
hospital.push("floor");
hospital.push("rowend");
//row 25
hospital.push("row");
hospital.push("h-wall");
AddFloor("hospital", 29);
hospital.push("h-wall");
hospital.push("floor");
hospital.push("rowend");
//row 26
hospital.push("row");
hospital.push("h-wall");
AddFloor("hospital", 29);
hospital.push("h-wall");
hospital.push("floor");
hospital.push("rowend");
//row 27
hospital.push("row");
hospital.push("h-wall");
hospital.push("obj");
AddFloor("hospital", 28);
hospital.push("h-wall");
hospital.push("floor");
hospital.push("rowend");
//row 28
hospital.push("row");
hospital.push("h-wall");
hospital.push("h-wall");
AddFloor("hospital", 27);
hospital.push("h-wall");
hospital.push("h-wall");
hospital.push("floor");
hospital.push("rowend");
//row 29
hospital.push("row");
hospital.push("floor");
hospital.push("h-wall");
hospital.push("h-wall");
hospital.push("h-wall");
hospital.push("h-wall");
AddFloor("hospital", 24);
hospital.push("h-wall");
AddFloor("hospital", 2);
hospital.push("rowend");
//row 30
hospital.push("row");
AddFloor("hospital", 4);
for(a=0;a<25;a++) {
  hospital.push("h-wall");
}
AddFloor("hospital", 3);
hospital.push("rowend");
//row 31
hospital.push("row");
AddFloor("hospital", 32);
hospital.push("rowend");
//row 32
hospital.push("row");
AddFloor("hospital", 32);
hospital.push("rowend");

AddRow("bedroom",["f","f","f","w","w","w","w","w","w","w","w","w","w","w","d","d","d","w","w","w","w","w","w","w","w","w","w","f","f","f","f","f"]);
AddRow("bedroom",["f","w","w","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","w","w","w","f","f","f"]);
AddRow("bedroom",["w","w","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","w","w","f"]);
AddRow("bedroom",["w","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","w","f"]);
AddRow("bedroom",["w","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","w","w"]);
AddRow("bedroom",["w","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","w"]);
AddRow("bedroom",["w","f","f","o","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","w"]);
AddRow("bedroom",["w","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","w"]);
AddRow("bedroom",["w","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","w"]);
AddRow("bedroom",["w","f","f","f","f","f","f","f","f","f","f","f","w","w","f","w","w","f","f","f","f","f","f","f","f","f","f","f","f","f","f","w"]);
AddRow("bedroom",["w","f","f","f","f","f","f","f","f","f","f","f","w","w","f","w","w","f","f","f","f","f","f","f","f","f","o","f","f","f","f","w"]);
AddRow("bedroom",["w","f","f","f","f","f","f","f","f","f","f","f","w","f","f","f","w","f","f","f","f","f","f","f","f","f","f","f","f","f","f","w"]);
AddRow("bedroom",["w","f","f","f","f","f","f","f","f","f","f","f","w","f","f","f","w","f","f","f","f","f","f","f","f","f","f","f","f","f","f","w"]);
AddRow("bedroom",["w","f","f","f","f","f","f","f","f","f","f","f","w","w","o","w","w","f","f","f","f","f","f","f","f","f","f","f","f","f","f","w"]);
AddRow("bedroom",["w","f","f","f","f","f","f","f","f","f","f","f","w","w","w","w","w","f","f","f","f","f","f","f","f","f","f","f","f","f","f","w"]);
AddRow("bedroom",["w","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","d"]);
AddRow("bedroom",["w","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","d"]);
AddRow("bedroom",["w","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","d"]);
AddRow("bedroom",["w","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","w"]);
AddRow("bedroom",["w","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","w"]);
AddRow("bedroom",["w","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","w"]);
AddRow("bedroom",["w","w","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","w","w"]);
AddRow("bedroom",["f","w","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","w","f"]);
AddRow("bedroom",["f","w","w","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","w","f"]);
AddRow("bedroom",["f","f","w","w","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","o","f","f","f","w","f"]);
AddRow("bedroom",["f","f","f","w","w","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","w","w","f","f"]);
AddRow("bedroom",["f","f","f","f","w","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","w","w","w","f","f","f"]);
AddRow("bedroom",["f","f","f","f","f","w","w","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","w","w","w","w","f","f","f","f","f"]);
AddRow("bedroom",["f","f","f","f","f","f","w","o","f","f","f","f","f","f","f","f","f","f","f","f","f","f","w","w","f","f","f","f","f","f","f","f"]);
AddRow("bedroom",["f","f","f","f","f","f","w","w","w","w","f","f","f","f","f","f","f","f","f","f","w","w","f","f","f","f","f","f","f","f","f","f"]);
AddRow("bedroom",["f","f","f","f","f","f","f","f","f","w","w","w","w","w","w","w","w","w","w","w","f","f","f","f","f","f","f","f","f","f","f","f"]);
AddRow("bedroom",["f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f"]);

AddRow("office",["f","w","w","w","w","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f"]);
AddRow("office",["w","w","f","f","w","w","w","w","w","f","f","f","f","f","f","f","f","w","w","f","f","f","f","f","f","f","f","f","f","f","f","f"]);
AddRow("office",["w","f","f","f","f","f","f","f","w","w","w","w","w","w","w","w","w","w","w","w","w","f","f","f","f","f","f","f","f","f","f","f"]);
AddRow("office",["w","f","f","f","f","f","f","f","f","w","f","f","f","w","f","f","f","f","f","w","w","w","w","f","f","f","f","f","f","f","f","f"]);
AddRow("office",["w","f","f","f","f","f","f","w","f","w","f","w","f","w","f","f","f","w","f","w","w","w","w","w","f","f","f","f","f","f","f","f"]);
AddRow("office",["w","f","f","f","f","f","f","w","f","w","f","w","f","w","f","f","f","w","f","w","w","w","w","w","w","f","f","f","f","f","f","f"]);
AddRow("office",["w","f","f","f","f","f","f","w","f","f","f","w","f","w","f","f","f","w","f","f","f","f","f","f","w","w","f","f","f","f","f","f"]);
AddRow("office",["w","f","f","f","f","f","f","w","w","w","w","w","f","w","f","f","f","w","f","w","w","w","w","f","o","w","w","f","f","f","f","f"]);
AddRow("office",["w","f","f","f","f","f","f","w","w","w","w","w","f","w","f","f","f","w","f","w","w","w","w","f","f","w","w","w","w","f","f","f"]);
AddRow("office",["w","f","f","f","f","f","f","w","w","w","o","f","f","w","f","f","f","w","f","w","w","w","w","f","w","w","w","w","w","w","f","f"]);
AddRow("office",["w","f","f","f","f","f","f","w","w","w","w","f","w","w","f","f","f","w","f","w","w","w","w","f","f","w","w","w","w","w","f","f"]);
AddRow("office",["w","f","f","f","f","f","f","w","w","w","w","f","w","w","f","f","w","w","f","w","w","w","w","w","f","w","w","w","w","w","f","f"]);
AddRow("office",["w","f","f","f","f","f","f","f","f","f","w","f","w","f","f","f","w","o","f","f","w","w","w","f","f","w","w","w","w","w","f","f"]);
AddRow("office",["w","f","f","f","f","f","f","f","w","f","w","f","w","f","f","f","w","w","w","f","w","w","w","f","w","w","w","w","w","f","f","f"]);
AddRow("office",["w","f","f","f","f","f","f","f","w","f","w","f","w","f","f","f","f","f","w","f","w","w","f","f","w","w","w","w","w","f","f","f"]);
AddRow("office",["d","f","f","f","f","f","f","f","w","f","f","f","w","f","f","f","f","f","w","f","f","w","f","w","w","w","w","w","w","f","f","f"]);
AddRow("office",["d","f","f","f","f","f","f","w","w","w","w","w","w","f","f","f","f","f","w","w","f","w","f","w","w","w","w","w","w","f","f","f"]);
AddRow("office",["d","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","w","f","f","w","f","f","f","f","w","w","w","w","f","f"]);
AddRow("office",["w","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","w","f","w","w","f","f","f","f","w","w","w","w","f","f"]);
AddRow("office",["w","w","w","w","f","f","f","f","f","f","f","f","f","f","f","f","f","f","w","f","w","w","f","f","f","f","w","f","f","f","w","f"]);
AddRow("office",["w","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","w","f","f","f","f","f","f","f","w","f","w","f","w","f"]);
AddRow("office",["w","f","w","w","f","f","f","f","f","f","f","f","f","f","f","f","f","f","w","w","w","w","f","f","f","f","f","f","w","f","w","f"]);
AddRow("office",["w","f","w","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","w","w","w","f","w","f"]);
AddRow("office",["w","f","w","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","w","f","f","f","w","f"]);
AddRow("office",["w","f","w","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","w","f","w","o","w","w"]);
AddRow("office",["w","f","w","w","w","f","w","w","w","w","w","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","w","f","w","w","w","w"]);
AddRow("office",["w","f","f","f","w","f","w","f","f","f","w","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","w","f","w","w","w","w"]);
AddRow("office",["w","w","w","f","w","w","w","f","w","f","w","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","w","f","f","f","w","f"]);
AddRow("office",["w","w","w","f","f","f","w","f","w","f","w","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","w","w","w","f","w","f"]);
AddRow("office",["f","w","o","f","w","f","w","f","w","f","w","w","w","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","w","f"]);
AddRow("office",["f","w","w","w","w","f","f","f","w","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","w","w","w","w","w","f"]);
AddRow("office",["f","f","f","w","w","w","w","w","w","w","w","d","d","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","f"]);

AddRow("classroom",["f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f"]);
AddRow("classroom",["f","f","f","f","w","w","w","w","w","w","w","w","w","w","w","w","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f"]);
AddRow("classroom",["f","f","f","w","w","f","w","w","f","f","f","f","f","f","f","w","w","w","w","w","f","f","f","f","f","f","f","f","f","f","f","f"]);
AddRow("classroom",["f","f","w","w","f","f","w","w","f","f","f","f","o","f","f","f","f","f","w","w","w","w","f","f","f","f","f","f","f","f","f","f"]);
AddRow("classroom",["f","w","w","f","f","f","w","w","f","w","w","w","w","w","w","w","w","f","w","w","f","w","w","f","f","f","f","f","f","f","f","f"]);
AddRow("classroom",["f","w","f","f","f","f","f","f","f","w","w","w","w","w","w","w","w","f","w","w","f","f","w","w","w","f","f","f","f","f","f","f"]);
AddRow("classroom",["f","w","f","f","f","f","f","f","f","w","w","w","w","w","w","w","w","f","w","w","f","f","f","f","w","w","w","f","f","f","f","f"]);
AddRow("classroom",["f","w","f","f","f","f","w","w","f","f","f","f","f","f","f","f","f","f","w","w","f","f","f","f","f","f","w","w","f","f","f","f"]);
AddRow("classroom",["f","w","f","f","f","f","w","w","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","w","w","f","f"]);
AddRow("classroom",["f","w","f","f","f","w","w","w","w","f","f","f","f","f","f","f","f","w","w","w","w","f","f","f","f","f","f","f","f","w","w","f"]);
AddRow("classroom",["f","w","f","f","o","w","w","w","w","f","f","f","f","o","f","f","f","w","w","w","w","f","f","f","f","f","f","f","f","w","w","w"]);
AddRow("classroom",["f","w","f","f","f","w","w","w","w","f","f","f","f","f","f","f","f","w","w","w","w","f","f","f","f","f","f","f","f","w","w","w"]);
AddRow("classroom",["f","w","f","f","f","f","f","w","w","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","w","w","w"]);
AddRow("classroom",["f","w","f","f","f","f","f","w","w","f","f","f","f","f","f","f","w","w","w","w","f","w","w","f","f","f","f","f","f","w","w","w"]);
AddRow("classroom",["f","w","f","f","f","f","f","w","w","w","w","w","w","w","w","w","w","w","w","w","f","w","w","w","f","f","f","f","f","w","w","w"]);
AddRow("classroom",["f","w","f","f","f","f","f","w","w","w","w","w","w","w","w","w","w","w","w","w","f","w","w","w","w","f","f","f","f","w","w","w"]);
AddRow("classroom",["f","w","f","f","f","f","f","w","w","w","w","w","w","w","w","w","w","w","w","w","f","w","w","w","w","w","f","f","f","f","f","d"]);
AddRow("classroom",["f","w","f","f","f","f","f","w","w","f","f","f","f","f","f","f","f","w","w","w","f","w","w","w","w","w","w","f","f","f","f","d"]);
AddRow("classroom",["f","f","w","f","f","f","f","w","w","f","w","w","w","w","w","w","f","w","w","w","f","w","w","w","w","w","w","w","f","w","w","w"]);
AddRow("classroom",["f","f","w","w","f","f","f","w","w","f","w","w","w","w","w","w","f","w","w","w","f","w","w","w","w","w","w","w","f","w","w","w"]);
AddRow("classroom",["f","f","f","w","f","f","f","w","w","f","f","f","f","f","w","w","f","w","w","o","f","f","f","f","f","f","f","f","f","w","w","w"]);
AddRow("classroom",["f","f","f","w","w","f","f","w","w","w","w","w","w","f","w","w","f","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w"]);
AddRow("classroom",["f","f","f","f","w","w","f","f","f","f","f","w","w","f","w","w","f","f","f","f","f","f","f","f","f","f","f","f","f","w","w","w"]);
AddRow("classroom",["f","f","f","f","f","w","w","w","w","w","f","w","w","f","w","w","f","f","f","f","f","f","f","f","f","f","f","f","f","w","w","f"]);
AddRow("classroom",["f","f","f","f","f","f","w","w","w","w","f","w","w","f","w","w","f","f","f","f","f","f","f","f","f","f","f","f","f","w","w","f"]);
AddRow("classroom",["f","f","f","f","f","f","f","w","w","w","f","w","w","f","w","w","f","f","f","f","f","f","f","f","f","f","f","f","w","w","f","f"]);
AddRow("classroom",["f","f","f","f","f","f","f","f","w","w","f","f","f","f","w","w","f","f","f","f","f","f","f","f","f","f","f","f","w","f","f","f"]);
AddRow("classroom",["f","f","f","f","f","f","f","f","f","w","w","w","w","w","w","w","f","f","w","w","w","w","w","w","w","w","w","w","f","f","f","f"]);
AddRow("classroom",["f","f","f","f","f","f","f","f","f","f","w","w","w","w","w","w","f","f","f","f","f","f","o","w","w","w","w","f","f","f","f","f"]);
AddRow("classroom",["f","f","f","f","f","f","f","f","f","f","f","w","w","w","w","w","f","f","w","w","w","w","w","w","w","f","f","f","f","f","f","f"]);
AddRow("classroom",["f","f","f","f","f","f","f","f","f","f","f","f","f","w","f","f","f","f","w","f","f","f","f","f","f","f","f","f","f","f","f","f"]);
AddRow("classroom",["f","f","f","f","f","f","f","f","f","f","f","f","f","w","d","d","d","w","w","f","f","f","f","f","f","f","f","f","f","f","f","f"]);
