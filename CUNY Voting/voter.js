CB.CloudApp.init("jcswdbukvmxg","b08be904-cbd9-437f-989d-b963f1dfa80a");

function submit() {
	var query = new CB.CloudQuery("positions");
	query.find({
		success: function(list){
			console.log(list);
			for (var i=0;i<list.length;i++){
				var personchose = $("input[name="+list[i].document.name+"]:checked").val()
				var vote = new CB.CloudObject("votes");
				vote.set("person", personchose);
				vote.set("position", list[i].document.name);
				vote.save({
					success : function(obj){
					    console.log("saved");
					    window.location.href = "login.html";
					},error : function(error){
					    alert(error);
					}
				});
			}
		},
		error: function(err) {
			alert(err);
		}
	})
}

var query = new CB.CloudQuery("positions");
query.find({
	success: function(list){
		console.log(list);
		for (var i = 0; i<list.length; i++) {
			console.log(list[i].document.name)
			$("#positionplaces").append(`<h2>Candidates For the Position of ${list[i].document.name}:<br><h3 id="peoplefor${list[i].document.name}"></h3></h3></h2>`)
		};
		query = new CB.CloudQuery("people");
		query.find({
			success: function(peoplelist){
				console.log(peoplelist);
				for(i = 0; i<list.length; i++){
					$("#peoplefor"+list[i].document.name).html("");
				}
				for(i = 0; i<peoplelist.length; i++){
					$("#peoplefor"+peoplelist[i].document.position).append(`<input type="radio" name="${peoplelist[i].document.position}" id="${i}" value="${peoplelist[i].document.name}">${peoplelist[i].document.name}<br>`);
				}
			},
			error: function(err) {
				alert(err);
			}
		})
	},
	error: function(err) {
		alert(err);
	}
});