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
//console.log(result);

var people = [{name:'ok', num:10}, {name:'ok2', num:12}];
//함수에서 전달한 Property를 반환함으로
//숫자 외에도 임의의 객체를 비교할 수 있게 되면서 활용도가 넓어졌다
var result = _.max(people, function (obj) {
    return obj.num;
});
//console.log(result);

//valueFun은 특정 개체에서 원하는 값을 불러오는 역할을 한다
//bestFun은 최대값을 불러오는 역할을 한다
//target은 그냥 대상
function finder(valueFun, bestFun, target) {
    return _.reduce(target, function(bestValue, currentValue) {
        var best = valueFun(bestValue);         //최선값을 불러옴
        var curr = valueFun(currentValue);      //현재값을 불러옴

        return (best === bestFun(best, curr)) ? bestValue : currentValue; //최선값이 기존의 최선값과 같으면 best 아니면 current
    });
}

//var result = finder(_.identity, Math.max, [1,2,3,4,5]);
//console.log(result);

//var result = finder(_.identity, Math.min, [1,2,3,4,5]);
//console.log(result);

var result = finder(function(obj) {
    return obj.num;
}, Math.min, [{num:5, title:'test1'}, {num:6, title:'test2'}]);

function best(fun, coll) {
    return _.reduce(coll, function(x, y) {
        return fun(x, y) ? x: y
    });
}

/*
이부분이 왜 위의 함수보다 최적화되는지 생각해볼 필요가 있을듯
이렇게 되면 _.indentity나, obj.name과 같은 부분과 같이 Value를 구해오는 Function과 best값을 구하는 Function이 혼자되게 된다
*/
var result = best(function (x, y) {
    return x < y;
}, [1,2,3,4,5])
console.log(result);