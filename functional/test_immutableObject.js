/**
 * Created by jonghyeok on 2017-03-12.
 */

var test1 = [2,3,-1,-6,0,-108,42,10].sort();
console.log("test1: ", test1);

var test2 = [2,3,-1,-6,0,-108,42,10].sort(function(x, y) {
    if(x > y) {
        return -1;
    }
    if(x < y) {
        return 1;
    }
    return 0;
});
console.log("test2: ", test2);


var testArr = [1,2,3];
console.log(testArr.push(2,3,4)); // mutable

// var arr = new ImmutableArray([1, 2, 3, 4]);
// var v2 = arr.push(5);
//
// arr.toArray(); // [1, 2, 3, 4]
// v2.toArray();  // [1, 2, 3, 4, 5]

