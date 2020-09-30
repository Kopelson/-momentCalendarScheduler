//JQuery will run this function on window load
$(document).ready(function() {
    getCurrentDay();
    createTimeBlocks();
    //change the style of each time block according to what time it is
    updateTimeBlocks();
    //fill in each time block with local storage data

    //save each hour time block data to local storage
    

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
        row.attr("value", i);
        //set class attributes
        row.attr("class", "row time-block");
        hourSpan.attr("class", "hour col-2");
        button.attr("class", "saveBtn col-2");
        icon.attr("class", "far fa-save");
        textSpan.attr("class", "textSpan col-8")
        textArea.attr("class", "col-12 h-100")
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
//This function updates the time-blocks "textSpan" class to change colors based on time - past, present, future.
function updateTimeBlocks(){
    //this assigns hourBlock all elements with the class "textSpan"
    let hourBlock = $('.textSpan');
    //this assigns two variables a moment of time start of day
    let startOfDay = moment().startOf('day');
    let startOfDay2 = moment().startOf('day');
    //this adds 8 hours to the first moment of time
    let time = startOfDay.add(8, 'h');
    //this adds 9 hours to the first moment of time
    let time2 = startOfDay2.add(9, "h");
    //this jquery each block will check the current time and compare it to the time that is associated with each time block, then assign a new class to the current time block textSpan either past, present, or future.
    hourBlock.each(function(){
        //this assigns adds a hour to the current time of the variable, the second time variable is to calculate the is between method that moment.js provides.
        time = startOfDay.add(1,"h");
        time2 = startOfDay2.add(1,"h");
        //this variable stores a boolean value that checks if the time block is before the current time of day
        let checkTime = moment(time).isBefore();
        //this variable stores a boolean value that checks if the time block is between the hour time blocks
        let currentTime = moment().isBetween(time, time2); 
        //this if/else statements adds the logic is the time block in the past, present, or future.
        if(checkTime && !currentTime){
            //jquery addClass adds a new class "past" to the textSpan
            $(this).addClass("past");
        } else if (currentTime) {
            //jquery addClass adds a new class "present" to the textSpan
            $(this).addClass("present");
        } 
        else {
            //jquery addClass adds a new class "future" to the textSpan
            $(this).addClass("future");
        }
       
    })

};    

