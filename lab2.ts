window.onload = function(){
	let today = new Date();
	let today_input = document.getElementById("p--today-date");
	console.log("Today is " + today.toDateString());
	today_input.innerHTML = "Today is " + today.toDateString();
}
