//JQuery will run this fucntionc on window load
$(document).ready(function() {
    getCurrentDay();
    createTimeBlocks();

})

//Uses moment to grab todays date, format it to be Day("Monday"), Month(October) Nth(12th), and adds it to the id tag of currentDay
function getCurrentDay() {
    let currentDay = moment().format("dddd, MMMM Do");
    $('#currentDay').text(currentDay);
}

function createTimeBlocks() {
    let container = $(".container");
    let startOfDay = moment().startOf('day');
    let myTime = startOfDay.add(9, 'h').format("h:mma");
    for(let i = 0; i < 9; i++){
        let row = $("<div>");
        row.attr("class", "row");
        row.attr("id", i);
        row.text(myTime);
        startOfDay = startOfDay.add(1, 'h');
        myTime = startOfDay.format("h:mma");
        container.append(row);
    };
};

    

