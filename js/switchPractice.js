/**
 * Created by home on 11/4/16.
 */



"use strict";


var number = 4;

if (number ==1){
    console.log("First");
}else if (number ==2){
    console.log("Second");
}else if (number ==3){
    console.log("Third");
}




var number = 2;  //change number

switch (number) {
    case 1:
        console.log("First");
        break;
    case 2:
        console.log("Second");
        break;
    case 3:
        console.log("Third");
        break;
    case 4:
        break;
    default:
        console.log("The number" + number + "has no" );
}

//add break to prevent "fall through" and program stops