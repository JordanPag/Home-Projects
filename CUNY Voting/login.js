CB.CloudApp.init("jcswdbukvmxg","b08be904-cbd9-437f-989d-b963f1dfa80a");

function login() {
	user = $("#username").val();
	pass = $("#password").val();
	if(user=="Admin"&&pass=="050892"||user=="admin"&&pass=="050892"){
		//admin login
		console.log("Admin");
		document.location.href = "admin.html";
	}
	var query = new CB.CloudQuery("voters");
	query.find({
		success: function(list){
			console.log(list);
			for (var i=0;i<list.length;i++){
				if(user==list[i].document.username&&pass==list[i].document.password){
					list[i].delete({
						success: function(obj){
							document.location.href = "voter.html";
						},
						error: function(err){
							console.log(err);
						}
					})
				} else {
					//username or password does not match
					$("#errorplace").html('<span class="alert alert-danger" role="alert" style="width:250px;"><span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span><span class="sr-only">Error:</span> Invalid username or password</span><br><br>');
				}
			}
		},
		error: function(err) {
			alert(err);
		}
	});
}