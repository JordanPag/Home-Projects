var hospital = ["row"];
hospital.push("floor");
hospital.push("rowend");

$("div.grid").append("<div class='floor'></div>");

for (y=0;y<(hospital.length);y++) {
  if (hospital[y]=="row") {
    $("div.grid").append("<div class=row>");
  } else if (hospital[y]=="rowend") {
    $("div.grid").append("</div>");
  } else {
    $("div.grid").append("<div class='"+hospital[y]+"'></div>");
  }
}
