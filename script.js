var database = [
	{
		username: "andrei",
		password: "supersecret"
	},
	{
		username: "chris",
		password: "123"
	},
	{
		username: "john",
		password: "password"
	}
];

var newsFeed = [
	{
		username: "Bobby",
		timeline: "So tired from all that learning!"
	},
	{
		username: "Sally",
		timeline: "JavaScript is so cool!"
	}
];

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

function isUserValid(username, password) {
	for (var i=0; i < database.length; i++) {
		if(database[i].username === username && database[i].password === password) {
			return true;
		}
	}
	return false;
}

function signIn(username, password) {
	if(isUserValid(username, password)) {
		console.log(newsFeed);
	} else {
		alert("Sorry, something went wrong");
	}
}

signIn(userNamePrompt, passwordPrompt);