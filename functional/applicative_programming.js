/**
 * Created by jonghyeok on 2017-03-08.
 */

/*
* 응용형 프로그래밍
* A함수 내부의 함수 B를 호출하는 형식. 이때 함수 A의 결과를 B의 인자로 제공
* */

/*function A() {
    something..
    return result;
}

function B(A) {
    something..
}*/

var _ = require('underscore');

var nums = [1,2,3,4,5];

function doubleAll(array) {
    return _.map(array, function (n) {
        return n*2;
    });
}

console.log(doubleAll(nums));

function average(array) {
    var sum = _.reduce(array, function (a, b) {
        return a + b;
    });

    return sum / _.size(array);
}

console.log(average(nums));

function onlyEven(array) {
    return _.filter(array, function (n) {
        return (n%2) === 0;
    });
}

/*
* 컬렉션 중심 프로그래밍
* 컬렉션에 포함된 많은 아이템을 처리해야 할 때 함수형 프로그래밍의 진가가 발휘된다
* */

var result = _.map({a: 1, b:2}, _.identity());
// console.log(result);

var result = _.map({a: 1, b:2}, function (v,k) {
    return [k,v];
});
// console.log(result);

var result = _.map({a: 1, b:2}, function (v,k, coll) {
    return [k,v, _.keys(coll)];
});
// console.log(result);

/*
* 응용형 프로그래밍의 다른 예제
* */

// _.reduce : 컬렉션 데이터를 왼쪽에서 오른쪽으로

_.reduce([1,2,3,4,5], function (a,b) {
    /*console.log(a,b);
    console.log(typeof(a+b));*/
    return a+b;
}, []);

_.reduceRight([1,2,3,4,5], function (a,b) {
    /*console.log(a,b);
    console.log(typeof(a+b));*/
    return a+b;
}, []);


function allOf() {
    return _.reduceRight(arguments, function (truth, f) {
        return truth && f();
    }, true);
}

// console.log( allOf() );

function T() {return true;}
function F() {return false;}

console.log( allOf(T,T) );
console.log( allOf(T,F) );
console.log( allOf(T,T,T,T) );
console.log( allOf(T,T,T,F) );


/*
* underscore 함수 소개
* */

console.log(_.find(['a','b',3,'d'], _.isNumber));
console.log(_.find(['a','b',3,'d'], _.isString)); // 찬반형 함수를 받아 true인 첫번째 반환
console.log(_.find(['a','b','3','d'], _.isNumber)); // 찬반형 함수를 받아 true인 첫번째 반환

//_.filter < -- > _.reject
console.log(_.reject([1,2,3],_.isString));
console.log(_.all([1,2,3,4], _.isNumber));
console.log(_.any([1,2,3,'d'], _.isString));

//
var people = [{name: "Rick", age: 3000}, {name: "Bob", age: 600}];
var result = _.sortBy(people, function (p) { return p.age });
console.log(result);

//
var people = [{name: "Rick", age: 3000}, {name: "Bob", age: 600}, {name: "Subu", age:3000}];
var result = _.groupBy(people, function (p) { return p.age });
console.log(result);

//
var people = [{name: "Rick", age: 3000}, {name: "Bob", age: 600}, {name: "Subu", age:3000}];
var result = _.countBy(people, function (p) { return p.age });
console.log(result);
//console.log(_.map(result, _.identity));

