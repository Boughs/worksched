// getting time using moment.js
var currentDate = moment().format("dddd") + " " + moment().format("Do MMM YYYY");

// Display Date
var interval = setInterval(function() {
    var momentNow = moment();
    $("#presentDay").html(momentNow.format("YYYY MMMM DD") + " " + momentNow.format("dddd").substring(0,3).toUpperCase());
    $("#presentDay").html(currentDate + " " + momentNow.format("hh:mm:ss A"));
}, 100);

// Time Block variables
var nineAm = $("#9am");
var tenAm = $("#10am");
var elevenAm = $("#11am");
var twelvePm = $("#12pm");
var onePm = $("#13pm");
var twoPm = $("14pm");
var threePm = $("15pm");
var fourPm = $("16pm");
var fivepm = $("17pm");

// load users schedule from local memory
var hour = moment().hours();
var userInput;
var hourSpan;

function loadTask() {
    console.log("Current Hour " + hour);
    var init9 = JSON.parse(localStorage.getItem("09:00 am"));
    nineAm.val(init9);

    var init10 = JSON.parse(localStorage.getItem("10:00 am"));
    tenAm.val(init10);

    var init11 = JSON.parse(localStorage.getItem("11:00 am"));
    elevenAm.val(init11);

    var init12 = JSON.parse(localStorage.getItem("12:00 pm"));
    twelvePm.val(init12);

    var init1 = JSON.parse(localStorage.getItem("01:00 pm"));
    onePm.val(init1);

    var init2 = JSON.parse(localStorage.getItem("02:00 pm"));
    twoPm.val(init2);

    var init3 = JSON.parse(localStorage.getItem("03:00 pm"));
    threePm.val(init3);

    var init4 = JSON.parse(localStorage.getItem("04:00 pm"));
    fourPm.val(init4);

    var init5 = JSON.parse(localStorage.getItem("05:00 pm"));
    fivePm.val(init5);
}

// change timeblock color based on relation to current user time
function timeColor () {
    $(".form-control").search(function () {
        var timeCheck = parseInt($(this).attr("id"));
        hour = parseInt(hour);
        if (hour > timeCheck) {
            $(this).addClass("past");
        } else if (hour < timeCheck) {
            $(this).addClass("future");
        } else {
            $(this).addClass("present")
        }
    });
}

// on page start
$(document).ready(function(){
    loadTask()
    timeColor()
});