.length : property that describes the number of characters in the string.
.indexOf(char) : returns the index of the specified character in the string.
.replace(find, replace) : returns a copy of the string after performing a substitution.
.substring(fromIndex, toIndex) : returns a subset of the original string based on the provided indices.
.toUpperCase() : returns a copy of the string in all upper case.
.toLowerCase() : returns a copy of the string in all lower case.
.trim() : returns a copy of the string with whitespace at the beginning and end removed.
//String.fromCharCode(code) : returns a string based on the provided ASCII code.
    .splice:  add, remove or replace one or more elements in the middle

.reverse  reverses array
    .sort  An array can be sorted by calling the sort method. The sort method, by default, will convert items in the
        array to their string equivalent and order them based on that value. A comparator function can be passed to the sort method, but we will not be covering that.

.unshift adds to beginning of array
.shift takes off beginning of array
.push adds to end of array
.pop takes off end of array




var test = "hello";

test.length;
//how many characters in string

test.toUpperCase;
//capitalizes all letters

test.toLowerCase;
//all lower case letters


//concatonation in console
//"HELLO CODEUP"
//"Hello Codeup" + " Class";
//"Hello Codeup Class"
//"Codeup"


// .indexOf
sample.indexOf('C');
//6
//searching from the beginning of an array and will return the first occurrence of what you are looking for
//.lastIndexOf
//starts at the end of the array and works backwardsvar colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'red'];
var index = colors.indexOf('green');
console.log(index);
// 3
index = colors.indexOf('red');
console.log(index);
// 0
index = colors.lastIndexOf('red');
console.log(index);
// 7



//parseInt example
parseInt("3.14");
//3

//parseFloat example
parseFloat("3.14");
//3.14

//.splice
//arrayName.splice(startIndex, numberOfItemsToRemove);
//example of REMOVE item with .splice
//var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
console.log(colors);
console.log('Removing the first two colors.');
var removed = colors.splice(0, 2);
console.log(removed);
// ['red', 'orange']
console.log(colors);
// ['yellow', 'green', 'blue', 'indigo', 'violet']
console.log('Removing green.');
removed = colors.splice(colors.indexOf('green'), 1);
console.log(removed);
// ['green']
console.log(colors);
// ['yellow', 'blue', 'indigo', 'violet']
//example of ADD item with .splice
var colors = ['red', 'orange', 'yellow', 'indigo', 'violet'];
console.log(colors);
console.log('Adding green and blue after yellow.');
colors.splice(colors.indexOf('yellow') + 1, 0, 'green', 'blue');
console.log(colors);
// ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
//example REPLACE item with .splice
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
console.log(colors);
console.log('Replacing indigo and violet with purple.');
colors.splice(colors.indexOf('indigo'), 2, 'purple');
console.log(colors);
// ['red', 'orange', 'yellow', 'green', 'blue', 'purple']


//.reverse example
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
console.log(colors);
// ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
console.log('Reversing the colors array.');
colors.reverse();
console.log(colors);
// ['violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red']


//.sort example
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
console.log(colors);
// ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
console.log('Sorting the colors array.');
colors.sort();
console.log(colors);
// ['blue', 'green', 'indigo', 'orange', 'red', 'violet', 'yellow']




