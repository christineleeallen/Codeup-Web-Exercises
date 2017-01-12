
"use strict";

var answer = prompt("Do you love me?", "Write your answer here");

switch(answer) {
    case 'yes':
        console.log("I love you too!");
        break;
    case 'maybe':
        console.log("I'm not sure either");
        break;
    case 'no':
        console.log("I hate you");
        break;
    default:
        console.log("Let's be friends");
}

