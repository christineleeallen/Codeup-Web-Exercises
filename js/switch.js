/**
 * Created by home on 11/4/16.
 */


'use strict';


//#1

var luckyNumber = Math.floor(Math.random()* 6)
console.log(luckyNumber);

var total = 60;
var discountPercent = 0;
var discount;

//write a switch statement that sets

switch(luckyNumber) {
    case 1:
        discountPercent = 0.1;
        break;
    case 2:
        discountPercent = 0.25;
        break;
    case 4:
        discountPercent = 0.5;
        break;
    case 5:
        discountPercent = 1;
        break;
    default:
        discountPercent = 0;
}

//apply the discountPercent
discount = total - (total * discountPercent);
console.log("you will pay " + (total - discount));





//#2

var month = 1;

switch (month) {
    case "January":
        console.log("January");
        break;
    case "February":
        console.log("February");
        break;
    case "March":
        console.log("March");
        break;
    case "April":
        console.log("April");
    case "May":
        console.log("May");
        break;
    case "June":
        console.log("June");
        break;
}


var day = 1;

switch (day) {
    case "Monday":
        console.log("Monday");
        break;
    case "Tuesday":
        console.log("Tuesday");
        break;
    case "Wednesday":
        console.log("Wednesday");
        break;
    case "Thursday":
        console.log("Thursday");
        break;
}