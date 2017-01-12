/**
 * Created by home on 1/11/17.
 */


"use strict"

var iLoveJavaScript = true;
var iLoveLearning = true;

if(iLoveJavaScript && iLoveLearning) {
    // if iLoveJavaScript AND iLoveLearning:
    console.log("Awesome! Let's keep learning!");
} else if(!(iLoveJavaScript || iLoveLearning)) {
    // if NOT iLoveJavaScript OR iLoveLearning:
    console.log("Let's see if we can change your mind.");
} else {
    console.log("You only like one but not the other? We'll work on it.");
}


//true && true;    // => true
//true && false;   // => false
//false && true;   // => false
//false && false;  // => false


//example

var hungry = true;
var foodHere = true;

var eat = function() {
    if(hungry && foodHere){
        return true;
    }
    else {
        return false;
    }
};



//true || true;     // => true
//true || false;    // => true
//false || true;    // => true
//false || false;   // => false

var tired = true;
var bored = false;

var nap = function() {
    if(tired || bored){
        return true;
    }
    else {
        return false;
    }
};


//!true;   // => false
//!false;  // => true

var programming = false

var happy = function() {
    if(!programming){
        return true;
    }
    else{
        return false;
    }
};

