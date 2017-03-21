CB.CloudApp.init("jcswdbukvmxg","b08be904-cbd9-437f-989d-b963f1dfa80a");

function addPosition() {
	console.log("add");
	$("#addPositionArea").html("<input id='newPosition' type='text' class='form-control' placeholder='Position Name' aria-describedby='basic-addon1'></input><button type='button' class='btn btn-primary' onclick='saveNewPositionToCloud();'>Submit</button>");
}

function results() {
	window.location.href = "results.html";
}

function saveNewPositionToCloud() {
	var name = $("#newPosition").val();
	$("#addPositionArea").html("");
	var position = new CB.CloudObject("positions");
	position.set("name", name);
	position.save({
		success : function(obj){
		    console.log("saved");
		    location.reload();
		},error : function(error){
		    alert(error);
		}
	});
}

function deletePosition(num) {
	var query = new CB.CloudQuery("positions");
	query.find({
		success: function(list){
			console.log(list);
			var position = list[num].document.name
			list[num].delete({
				success : function(obj){
					console.log("deleted")
					query = new CB.CloudQuery("people");
					query.find({
						success: function(list){
							console.log(list);
							for(var i = 0; i<list.length; i++){
								console.log(list[i].document.position);
								if(list[i].document.position==position){
									list[i].delete({
										success: function(obj){
											console.log("deleted")
										},
										error: function(err){
											alert(err)
										}
									})
								}
							}
							alert("Reload your page for your actions to take effect.");
						},
						error: function(err) {
							alert(err)
						}
					})
				},error : function(error){
					alert(error);
				}
			})
		},
		error: function(err) {
			alert(err);
		}
	});
}

function deletePerson(num) {
	var query = new CB.CloudQuery("people");
	query.find({
		success:function(list){
			console.log(list);
			list[num].delete({
				success: function(obj){
					console.log("deleted");
					location.reload();
				},
				error: function(err){
					alert(err);
				}
			})
		},
		error: function(err){
			alert(err);
		}
	})
}

function addPersonTo(position) {
	console.log("add");
	$("#addPersonFor"+position).html(`<input id='newPerson' type='text' class='form-control' placeholder='Name' aria-describedby='basic-addon1'></input><button type='button' class='btn btn-primary' onclick='saveNewPersonToCloud("${position}");'>Submit</button>`);
}

function saveNewPersonToCloud(position) {
	var name = $("#newPerson").val();
	$("#addPersonFor"+position).html("");
	var person = new CB.CloudObject("people");
	person.set("name", name);
	person.set("position", position);
	person.save({
		success : function(obj){
		    console.log("saved");
		    location.reload();
		},error : function(error){
		    alert(error);
		}
	});
}

function startVoting() {
	console.log("vote");
	$("#numVotersArea").html(`<input id='numVoters' type='number' class='form-control' placeholder='Number of Voters' aria-describedby='basic-addon1'></input><button type='button' class='btn btn-primary' onclick='start();'>Submit</button>`);
}

function start() {
	var numVoters = $("#numVoters").val();
	var voterusers = [];
	var voterpasses = [];
	$("#numVotersArea").html("");
	for (var i = 0; i < numVoters; i++) {
		var user = "";
		var pass = "";
		for (var x = 0; x < 8; x++) {
			var num = Math.floor(Math.random()*10);
			user += num.toString();
		};
		for (var y = 0; y < 8; y++) {
			var num = Math.floor(Math.random()*10);
			pass += num.toString();
		};
		voterusers.push(user);
		voterpasses.push(pass);
	};
	for(var i=0; i<numVoters; i++) {
		var login = new CB.CloudObject("voters");
		login.set("username", voterusers[i]);
		login.set("password", voterpasses[i])
		login.save({
			success : function(obj){
			    console.log("saved");
			},error : function(error){
			    alert(error);
			}
		});
	}
	console.log(voterusers);
	console.log(voterpasses);
	$("#logins").html("<tr><th></th><th>Username &nbsp;</th><th>Password</th></tr>")
	for (var i = 0; i < numVoters; i++) {
		$("#logins").append(`<tr><th>Person ${i+1} &nbsp;</th><td>${voterusers[i]}</td><td>${voterpasses[i]}</td></tr>`)
	}
	$("#myModal").modal();
}

var query = new CB.CloudQuery("positions");
query.find({
	success: function(list){
		console.log(list);
		if(list.length>0){
			$("#positions").html("");
		}
		for (var i = 0; i<list.length; i++) {
			console.log(list[i].document.name)
			$("#positions").append(`<li>${list[i].document.name}&nbsp;&nbsp;<button type="button" class="btn btn-primary" onclick="deletePosition(${i})"><img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-trash-b-128.png" width="20"></img></button></li>`);
			$("#positionrunners").append(`<h2>Current Candidates For the Position of ${list[i].document.name}:<br><h3 id="peoplefor${list[i].document.name}">None</h3><h3><br><button type="button" class="btn btn-primary" onclick="addPersonTo('${list[i].document.name}');">+</button><br><br><span id="addPersonFor${list[i].document.name}"></span></h3></h2>`)
		};
		query = new CB.CloudQuery("people");
		query.find({
			success: function(peoplelist){
				console.log(peoplelist);
				for(i = 0; i<list.length; i++){
					$("#peoplefor"+list[i].document.name).html("");
				}
				for(i = 0; i<peoplelist.length; i++){
					$("#peoplefor"+peoplelist[i].document.position).append(`<li>${peoplelist[i].document.name}&nbsp;&nbsp;<button type="button" class="btn btn-primary" onclick="deletePerson(${i})"><img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-trash-b-128.png" width="20"></img></button></li>`);
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