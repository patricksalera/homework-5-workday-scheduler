let currentTime = moment().format('MMMM Do YYYY, ');
console.log(currentTime);

function displayTime(){
    document.getElementById("currentDay").innerHTML = currentTime;
    
};
setInterval(displayTime, 1000);
displayTime()

$(".saveBtn").on("click", function (event) {
    event.preventDefault();
    console.log(this);
    var value = $(this).siblings(".description").val();
    
});
$("#currentDay").text(moment().format("LLL"));
function timeFrame() {
    var currentHours = moment().hours();

    $(".time-block").each(function () {
        var hourEl = $(this).attr("id");
        var hourDay = hourEl.substring(5, hourEl.length);
        var intHourDay = parseInt(hourDay)
        var intCurrentHours = parseInt(currentHours);
        if (parseInt(intHourDay) < parseInt(intCurrentHours)) {
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
        }
        else if (parseInt(intHourDay) > parseInt(intCurrentHours)) {
            $(this).addClass("future");
            $(this).removeClass("present");
            $(this).removeClass("past");
        }
        else if (parseInt(intHourDay) === parseInt(intCurrentHours)) {
            $(this).addClass("present");
            $(this).removeClass("future");
            $(this).removeClass("past");
        }
    })
};
timeFrame();
