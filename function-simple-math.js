/**
 * Created by home on 12/5/16.
 */


var calculate = function (number) {
    var val = number * 10;
    console.log(val);
}
calculate(10);



//A function called timesTwo() takes in a number and returns the number multiplied by two.
//after the equals sign, call the function timesTwo with any parameter you want
//The next line prints out newNumber. Notice how the value we return from timesTwo() is automatically assigned into newNumber.
// Parameter is a number, and we do math with that parameter
var timesTwo = function(number) {
    return number * 2;
};
// Call timesTwo here!
var newNumber = timesTwo(4);
console.log(newNumber);