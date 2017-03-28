/**
 * Created by jonghyeok on 2017-03-12.
 */

var testArr = [2,3,-1,-6,0,-108,42,10];

var test1 = testArr.sort();
console.log("test1: ", test1);


console.log(testArr); //[2,3,-1,-6,0,-108,42,10]

var test2 = testArr.sort(function(x, y) {
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
//console.log(testArr);

var obj = {
    test: 'A',
    test2: 'B'
};

function someProcess1(obj) {
    obj.test + "BCD";
    return obj;
}

function someProcess2(obj) {
    obj.test = "2";
    //someProcess
}

function someProcess3(obj) {
    obj.test + "1";
    return obj;
}

console.log(obj);