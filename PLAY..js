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

AddFloor("hospital", 10);
hospital.push("h-wall");
hospital.push("door");
hospital.push("door");
hospital.push("h-wall");
AddFloor("hospital", 18);
hospital.push("rowend");
hospital.push("row");
AddFloor("hospital", 10);
hospital.push("h-wall");
AddFloor("hospital", 2);
hospital.push("h-wall");
AddFloor("hospital", 18);
hospital.push("rowend");
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
hospital.push("row");
AddFloor("hospital", 1);
hospital.push("h-wall");
hospital.push("h-wall");
AddFloor("hospital", 19);
hospital.push("h-wall");
hospital.push("h-wall");
AddFloor("hospital", 8);
hospital.push("rowend");
hospital.push("row");

hospital.push("rowend");
hospital.push("row");

hospital.push("rowend");
hospital.push("row");

hospital.push("rowend");
hospital.push("row");

hospital.push("rowend");
hospital.push("row");

hospital.push("rowend");
hospital.push("row");

hospital.push("rowend");
hospital.push("row");

hospital.push("rowend");
hospital.push("row");

hospital.push("rowend");
hospital.push("row");

hospital.push("rowend");
hospital.push("row");

hospital.push("rowend");
hospital.push("row");

hospital.push("rowend");
hospital.push("row");

hospital.push("rowend");
hospital.push("row");

hospital.push("rowend");
hospital.push("row");

hospital.push("rowend");
hospital.push("row");

hospital.push("rowend");
hospital.push("row");

hospital.push("rowend");
hospital.push("row");

hospital.push("rowend");
hospital.push("row");

hospital.push("rowend");
hospital.push("row");

hospital.push("rowend");
hospital.push("row");

hospital.push("rowend");
hospital.push("row");

hospital.push("rowend");
hospital.push("row");

hospital.push("rowend");
hospital.push("row");

hospital.push("rowend");
hospital.push("row");
AddFloor("hospital", 32);
hospital.push("rowend");
hospital.push("row");
AddFloor("hospital", 32);
hospital.push("rowend");

AddRoom("hospital");
