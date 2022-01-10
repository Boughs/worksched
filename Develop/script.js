// getting time using moment.js
var currentDate = moment().format("dddd") + " " + moment().format("Do MMM YYYY");

// Display Date
var interval = setInterval(function() {
    var momentNow = moment();
    $("#presentDay").html(momentNow.format("YYYY MMMM DD") + " " + momentNow.format("dddd").substring(0,3).toUpperCase());
    $("#presentDay").html(currentDate + " " + momentNow.format("hh:mm:ss A"));
}, 100);