enum months {january, february, march, april, may, june, july, august, september, october, november, december};
enum days {sunday, monday, tuesday, wednesday, thursday, friday, saturday};
window.onload = function(){	
	let birthday_button = document.getElementById('button--birthday');
	if(birthday_button!=null){
		birthday_button.onclick = birthdayButtonOnclick;
	}
	let pTodayDate = document.getElementById("p--today-date");

	//Today's date
	let today : Date = new Date();

	//today's month
	let todayMonth : string = months[today.getMonth()];

	//today's day of week
	let todayDayOfWeek : string = days[today.getDay()];

	//display today's date to page
	if(pTodayDate!= null)
		pTodayDate.innerHTML = `Today is ${ todayDayOfWeek }, ${ todayMonth } ${ today.getDate() }, ${ today.getFullYear() } `;
}

function birthdayButtonOnclick(){
	let birthday_input = document.getElementById("input--date-picker");
	let p_birthday = document.getElementById("p--birthday-message");
	if(birthday_input==null || birthday_input.value == '' || p_birthday == null || birthday_input.value == null){
		return;
	}
	// console.log(birthday_input.value);
	// console.log(new Date(`${birthday_input.value}`).setUTCHours());
	let bday_date = new Date(birthday_input.value + ' GMT-0400')
	p_birthday.innerHTML = getStringResponse(bday_date);
	
}

function getStringResponse(birthday_date: Date) : string{
	let today : Date = new Date();
	let birthday_today : Date = birthday_date;
	birthday_today.setFullYear(today.getFullYear());
	//console.log(`${birthday_today.toDateString()}-${today.toDateString()}`)

	if(birthday_today.toDateString() == today.toDateString()){
		return "Happy Birthday!"
	}
	else{
		return `Your birthday is on ${days[birthday_today.getDay()]} ${months[birthday_today.getMonth()]} ${birthday_today.getDate()}, ${birthday_date.getFullYear()}`;
	}
}
