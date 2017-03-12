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
