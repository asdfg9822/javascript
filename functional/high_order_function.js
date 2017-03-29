/**
 * Created by user on 2017. 3. 29..
 */

/*

고차 함수는 일급이다
함수를 인자로 받는다
함수를 결과로 반환한다

*/

var _ = require('underscore');

var result = _.max([1,2,3,4,5]);
console.log(result);

var people = [{name:'ok', num:10}, {name:'ok2', num:12}];
//함수에서 전달한 Property를 반환함으로
//숫자 외에도 임의의 객체를 비교할 수 있게 되면서 활용도가 넓어졌다
var result = _.max(people, function (obj) {
    return obj.num;
});
console.log(result);

function finder(valueFun, bestFun, coll) {
    return _.reduce(coll, function (best, current) {
        var bestValue = valueFun(best);
        var currentValue = valueFun(current);

        return (bestValue === bestFun(bestValue, currentValue)) ? best : current;
    })
}

var result = finder(_.identity, Math.max, [1,2,3,4,5]);
console.log(result);
