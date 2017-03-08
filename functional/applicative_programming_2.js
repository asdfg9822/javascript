/**
 * Created by jonghyeok on 2017-03-08.
 */

var _ = require('underscore');

function existy(x) {return x != null};
function truthy(x) {return (x !== false) && existy(x) };

/*
* 응용형 함수 만들기
* */

//cat은 함수를 인자로 받지 않으니 응용형이 아님
function cat() {
    var head = _.first(arguments);
    if(existy(head)) {
        return head.concat.apply(head, _.rest(arguments));
    } else {
        return [];
    }
}

var result = cat([1,2,3,4],[5,6,7],[8,9]);
console.log(result);

//용소와 배열을 인자로 받아 배열 앞에 요소를 추가하는 함수인 construct도 응용형 함수가 아니다
function construct(head, tail) {
    return cat([head], _.toArray(tail));
}

var result = construct(42, [1,2,3]);
console.log(result);

function mapcat(fun, coll) {
    return cat.apply(null, _.map(coll, fun));
}

var result = mapcat(function (e) {
    return construct(e, ",");
}, [1,2,3,4]);

console.log(result.join('').slice(0,-1));

