//JQuery will run this function on window load
$(document).ready(function() {
    getCurrentDay();
    createTimeBlocks();

})

//Uses moment to grab todays date, format it to be Day("Monday"), Month(October) Nth(12th), and adds it to the id tag of currentDay
function getCurrentDay() {
    let currentDay = moment().format("dddd, MMMM Do");
    $('#currentDay').text(currentDay);
}
//creates new time blocks for the day scheduler 
function createTimeBlocks() {
    let container = $(".container");
    let startOfDay = moment().startOf('day');
    let myTime = startOfDay.add(9, 'h').format("h:mma");
    for(let i = 0; i < 9; i++){
        
        //Create new variables for each time block
        let row = $("<div>");
        let hourSpan = $("<span>");
        let textSpan = $("<span>");
        let textArea = $("<textarea>");
        let button = $("<button>");
        let icon = $("<i>");
        //set id attributes
        row.attr("id", i);
        //set class attributes
        row.attr("class", "row time-block");
        hourSpan.attr("class", "hour col-2");
        button.attr("class", "saveBtn col-2");
        icon.attr("class", "far fa-save ");
        textSpan.attr("class", "col-8")
        textArea.attr("class", "col-12")
        //add texts to element
        hourSpan.text(myTime);
        //append each element in order of layout
        button.append(icon);
        textSpan.append(textArea);
        row.append(hourSpan);
        row.append(textSpan);
        row.append(button);
        //change time block by 1 hour
        startOfDay = startOfDay.add(1, 'h');
        myTime = startOfDay.format("h:mma");
        container.append(row);
    };
};

    

