window.onload = function () {
    var today = new Date();
    var today_input = document.getElementById("p--today-date");
    console.log("Today is " + today.toDateString());
    today_input.innerHTML = "Today is " + today.toDateString();
};
