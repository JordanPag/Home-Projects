var hospital = ["row"];
for (x=0;x<10;x++) {
  hospital.push("floor");
}
hospital.push("rowend");

for (x=0;x<hospital.length;x++) {
  if (hospital[x]=="row") {
    $("div.grid").append("<div class=row>");
  } else if (hospital[x]=="rowend") {
    $("div.grid").append("</div>");
  } else {
    $("div.grid").append("<div class='"+hospital[x]+"'></div>");
  }
}
