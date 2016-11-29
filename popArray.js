/**
 * Created by home on 11/16/16.
 */


//takes item off end off array (list)

var bucketList = ['learn to juggle', 'take a falconry class', 'climb Mt Everest'];

bucketList.pop();

console.log(bucketList);

//.unshift adds to beginning of array
//.shift takes off beginning of array
//.push adds to end of array
//.pop takes off end of array


//example
var daysOfTheWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday'];
console.log(daysOfTheWeek);
// ['Monday', 'Tuesday', 'Wednesday', 'Thursday']
// let's add 'Friday' and 'Saturday' to the end of the week
daysOfTheWeek.push('Friday', 'Saturday');
console.log(daysOfTheWeek);
// ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
// let's add 'Sunday' to the beginning of the week
daysOfTheWeek.unshift('Sunday');
console.log(daysOfTheWeek);
// ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
