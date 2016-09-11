var hospital = ["row"];

function HospAddFloor(x) {
  for (z=0;z<x;z++) {
    hospital.push("floor");
  }
}

HospAddFloor(10);
hospital.push("h-wall");
hospital.push("door");
hospital.push("door");
hospital.push("h-wall");
HospAddFloor(18);
hospital.push("rowend");


hospital.push("row");
HospAddFloor(32);
hospital.pus("rowend");
hospital.push("row");
HospAddFloor(32);
hospital.pus("rowend");
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
