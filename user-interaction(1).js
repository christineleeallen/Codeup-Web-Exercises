"use strict";

// TODO: Ask the user for their name.
//       Keep asking if an empty input is provided.
var response = prompt('What is your name?');

// TODO: Show an alert message that welcomes the user based on their input.
alert('Welcome, ' + response + ' please join us');

// TODO: Ask the user if they like pizza.
//       Based on their answer show a creative alert message.
// the line below will display the prompt dialog and store the user input result in the response variable
var response = prompt('Do you like pizza?');
// next, we will send a message back to the user that uses their response
alert('Is pizza good? ' + response + ',' + ' I definitely agree!');


//confirm example
var confirmed = confirm('Do you want to leave this page?');
if (confirmed === 'ok') {
    console.log('user leaves page');
} else if (confirmed === 'cancel') {
    console.log('User stays on page');
}