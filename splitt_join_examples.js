/**
 * Created by home on 11/29/16.
 */

Splitting and joining allow for the conversion between arrays and strings.

Splitting will take a string and turn it into an array. String splitting uses a delimiter to decide where the splitting should occur. To split a string, call the split method passing the delimiter as a parameter. For example:

    var namesString = "Joe,Bob,Sally";
console.log(namesString);
// Joe,Bob,Sally
var namesArray = namesString.split(',');
console.log(namesArray);
// ['Joe', 'Bob', 'Sally']

Joining
Joining will take an array and convert it to a string with the delimiter of your choice. The join method is available on an array object and it takes a delimiter as a parameter. Let's look at the first example again, but in reverse.

var namesArray = ['Joe', 'Bob', 'Sally'];
console.log(namesArray);
// ['Joe', 'Bob', 'Sally']
var namesString = namesArray.join(',');
console.log(namesString);
// Joe,Bob,Sally

