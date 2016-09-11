var hospital = ["row"];

function HospAddFloor(x) {
  for (z=0;z<x;z++) {
    hospital.push("floor");
  }
}

HospAddFloor(10);

hospital.push("rowend")

for (y=0;y<(hospital.length);y++) {
  if (hospital[y]=="row") {
    $("div.grid").append("<div class='row'>");
  } else if (hospital[y]=="rowend") {
    $("div.grid").append("</div>");
  } else {
    $("div.grid").append("<div class='"+hospital[y]+"'></div>");
  }
}
