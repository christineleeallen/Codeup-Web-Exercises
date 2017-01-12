/**
 * Created by home on 12/6/16.
 */

'use strict';

var my_number = 7; //this has global scope

var timesTwo = function(number) {
    my_number = number * 2; //GLOBAL scope because no 'var'
    console.log("Inside the function my_number is: ");
    console.log(my_number);
};

timesTwo(7);

console.log("Outside the function my_number is: ")
console.log(my_number);


var my_number = 7; //this has global scope

var timesTwo = function(number) {
    var my_number = number * 2; //LOCAL scope because ADDED the 'var'
    console.log("Inside the function my_number is: ");
    console.log(my_number);
};

timesTwo(7);

console.log("Outside the function my_number is: ")
console.log(my_number);