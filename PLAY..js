var hospital = ["row"];

function AddFloor(room, x) {
  for (z=0;z<x;z++) {
    room.push("floor");
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
HospAddFloor(32);
hospital.push("rowend");
hospital.push("row");
HospAddFloor(32);
hospital.push("rowend");
var num = 1;
for (y=0;y<(hospital.length);y++) {
  if (hospital[y]=="row") {
    $("div.grid").append("<div class='row'>");
  } else if (hospital[y]=="rowend") {
    $("div.grid").append("</div>");
  } else {
    $("div.grid").append("<div class='"+hospital[y]+"' id='"+num+"'></div>");
    num += 1;
  }
}
