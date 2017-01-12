/**
 * Created by home on 12/6/16.
 */

//Every week you buy 5 oranges. But orange prices keep changing!
//You want to declare a function that calculates the cost of buying 5 oranges.
//You then want to calculate the cost of the 5 all together.
//Write a function that does this called orangeCost().
//It should take a parameter that is the cost of an orange, and multiply it by 5.
//It should log the result of the multiplication to the console.
//Call the function where oranges each cost 5 dollars.

var orangeCost = function (price){
    var cost = price * 5;
    console.log("Five oranges cost " + "$" + cost);
};

orangeCost(5);
