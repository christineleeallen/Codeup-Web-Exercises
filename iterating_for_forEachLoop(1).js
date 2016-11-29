/**
 * Created by home on 11/28/16.
 */
// declare and initialize array
var names = ['Chloe', 'Henry', 'Jack', 'Kona'];
// loop through the array and log the values
for (var i = 0; i < names.length; i++) {
    console.log('The name at index ' + i + ' is: ' + names[i]);
}

// declare and initialize array
var names = ['Chloe', 'Henry', 'Jack', 'Kona'];
// loop through the array and log the values
names.forEach(function (element, index, array) {
    // element is the shape name
    // index is the iterator
    // array is the shapes array itself
    console.log('The name at index ' + index + ' is: ' + element);
});
