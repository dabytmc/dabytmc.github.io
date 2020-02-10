// Set the date we're counting down to
const countDownDate = new Date("Feb 14, 2020 00:00:00").getTime();
const target_id = "timer"

function getDistance() {
    var now = new Date().getTime();
    return countDownDate - now;
}

function updateTimer() {
    var distance = getDistance();

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById(target_id).innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s";
}

function printResult() {
    document.getElementById(target_id).innerHTML = "Today is the day, now is the time!";
}

var distance = getDistance();
if (distance > 0) {
    updateTimer();
    var updater = setInterval(updateTimer, 1000);

    setTimeout(function() {
        clearInterval(updater);
        printResult();
    }, distance);
} else {
    printResult();
}
