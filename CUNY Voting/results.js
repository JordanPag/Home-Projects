CB.CloudApp.init("jcswdbukvmxg","b08be904-cbd9-437f-989d-b963f1dfa80a");

function clearvotes() {
	console.log("clear");
	var query = new CB.CloudQuery("votes");
	query.find({
		success: function(list){
			console.log(list);
			for (var i=0; i<list.length; i++){
				list[i].delete({
					success: function(obj){
						console.log("deleted");
					},
					error: function(err){
						alert(err)
					}
				})
			}
			alert("The votes are deleted. Reload the page to see your changes.");
		},
		error: function(err){
			alert(err)
		}
	})
}

var query = new CB.CloudQuery("positions");
query.find({
	success: function(list){
		console.log(list);
		for (var i = 0; i<list.length; i++) {
			console.log(list[i].document.name)
			$("#positionplaces").append(`<h2>Votes For the Position of ${list[i].document.name}:<br><h3 id="peoplefor${list[i].document.name}"></h3></h3></h2>`)
		};
		query = new CB.CloudQuery("votes");
		query.find({
			success: function(peoplelist){
				console.log(peoplelist);
				for(i = 0; i<peoplelist.length; i++){
					$("#peoplefor"+peoplelist[i].document.position).append(`<li>${peoplelist[i].document.person}</li>`);
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