var hospital = ["row"];

function AddFloor(room, x) {
  for (z=0;z<x;z++) {
    var rom = eval(room);
    rom.push("floor");
  }
}

function AddRoom(room) {
  $("div.grid").html("");
  var num = 1;
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

//row 1
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

AddRoom("hospital");
