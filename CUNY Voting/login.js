function login() {
	user = $("#username").val();
	pass = $("#password").val();
	if(user=="Admin"&&pass=="050892"||user=="admin"&&pass=="050892"){
		//admin login
		console.log("Admin");
		document.location.href = "admin.html";
	}
}