"use strict";

// Don't change the next two lines!
// This creates two variables:
//     one with the colors of the rainbow, and another with a single random
//     color value


// TODO: create a case statement that will handle every color except indigo and violet
// TODO: when a color is encountered log a message that tells the color, and an object of that color
//       example: Blue is the color of the sky.

// TODO: create a default case that will catch indigo and violet
// TODO: for the default case, log: I do not know anything by that color.


var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var color = colors[Math.floor(Math.random()*colors.length)];


switch (color) {
    case 'red':
        console.log('I like red apples');
        break;
    case 'orange':
        console.log('I like orange oranges');
        break;
    case 'yellow':
        console.log('I like yellow lemons');
        break;
    case 'green':
        console.log('I like green peppers');
        break;
    case 'blue':
        console.log('I like blue eggplant');
        break;
    default:
        console.log('Indigo or violet');
        break;
}

