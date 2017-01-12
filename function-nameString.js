/**
 * Created by home on 12/6/16.
 */

//example
var nameString = function(name) {
    console.log("Hi, I am" + " " + name)
}
nameString("Christine Allen")


//example 2
var nameString = function(name) {
    return "Hi, I am" + " " + name;
};
console.log(nameString("Christy"));


//example 3
// Below is the greeting function!
// See line 7
// We can join strings together using the plus sign (+)
// See the hint for more details about how this works.

var greeting = function (name) {
    console.log("Great to see you," + " " + name);
};

// On line 11, call the greeting function!
greeting("Christy");