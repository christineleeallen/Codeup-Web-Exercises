/**
 * Created by home on 12/6/16.
 */
'use strict';
//Define a function called quarter which has a parameter called number.
//This function returns a value equal to one quarter of the parameter. (i.e. number / 4;)
//Call the function inside the if statement's condition (and put in a parameter value!) such that "The statement is true" is printed to the console.

// Define quarter here.
var quarter=function(number){
    return number/4;
};

if (quarter(12) % 3 === 0 ) {
    console.log("The statement is true");
} else {
    console.log("The statement is false");
}

