var months;
(function (months) {
    months[months["january"] = 0] = "january";
    months[months["february"] = 1] = "february";
    months[months["march"] = 2] = "march";
    months[months["april"] = 3] = "april";
    months[months["may"] = 4] = "may";
    months[months["june"] = 5] = "june";
    months[months["july"] = 6] = "july";
    months[months["august"] = 7] = "august";
    months[months["september"] = 8] = "september";
    months[months["october"] = 9] = "october";
    months[months["november"] = 10] = "november";
    months[months["december"] = 11] = "december";
})(months || (months = {}));
;
var days;
(function (days) {
    days[days["sunday"] = 0] = "sunday";
    days[days["monday"] = 1] = "monday";
    days[days["tuesday"] = 2] = "tuesday";
    days[days["wednesday"] = 3] = "wednesday";
    days[days["thursday"] = 4] = "thursday";
    days[days["friday"] = 5] = "friday";
    days[days["saturday"] = 6] = "saturday";
})(days || (days = {}));
;
window.onload = function () {
    var birthday_button = document.getElementById('button--birthday');
    if (birthday_button != null) {
        birthday_button.onclick = birthdayButtonOnclick;
    }
    var pTodayDate = document.getElementById("p--today-date");
    //Today's date
    var today = new Date();
    //today's month
    var todayMonth = months[today.getMonth()];
    //today's day of week
    var todayDayOfWeek = days[today.getDay()];
    //display today's date to page
    if (pTodayDate != null)
        pTodayDate.innerHTML = "Today is " + todayDayOfWeek + ", " + todayMonth + " " + today.getDate() + ", " + today.getFullYear() + " ";
};
function birthdayButtonOnclick() {
    var birthday_input = document.getElementById("input--date-picker");
    var p_birthday = document.getElementById("p--birthday-message");
    if (birthday_input == null || birthday_input.value == '' || p_birthday == null || birthday_input.value == null) {
        return;
    }
    // console.log(birthday_input.value);
    // console.log(new Date(`${birthday_input.value}`).setUTCHours());
    var bday_date = new Date(birthday_input.value + ' GMT-0400');
    p_birthday.innerHTML = getStringResponse(bday_date);
}
function getStringResponse(birthday_date) {
    var today = new Date();
    var birthday_today = birthday_date;
    birthday_today.setFullYear(today.getFullYear());
    //console.log(`${birthday_today.toDateString()}-${today.toDateString()}`)
    if (birthday_today.toDateString() == today.toDateString()) {
        return "Happy Birthday!";
    }
    else {
        return "Your birthday is on " + days[birthday_today.getDay()] + " " + months[birthday_today.getMonth()] + " " + birthday_today.getDate() + ", " + birthday_date.getFullYear();
    }
}
