

console.log(moment().format());
console.log(moment().format("dddd, MMMM Do"));


$(document).ready(function() {
    let currentDay = moment().format("dddd, MMMM Do");
    $('#currentDay').text(currentDay);

})
