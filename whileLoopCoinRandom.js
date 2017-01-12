/**
 * Created by home on 1/3/17.
 */


"use strict"


var coinFace = Math.floor(Math.random() * 2);

while(coinFace === 0){
    console.log("Heads! Flipping again...");
    var coinFace = Math.floor(Math.random() * 2);
}
console.log("Tails! Done flipping.");
