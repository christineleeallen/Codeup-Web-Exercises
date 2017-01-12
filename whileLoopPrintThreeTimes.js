/**
 * Created by home on 1/3/17.
 */

"use strict"

var loops = 0;

var loop = function(three) {
    while(loops < 3) {
        console.log("I'm looping!");
        loops++;
    }
}

loop(3);
