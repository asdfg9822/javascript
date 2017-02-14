/**
 * Created by user on 2017. 2. 14..
 */

var _ = require('underscore');

//기본사항, 배열에는 reverse 함수가 존재
console.log([1,2,3].reverse());

//Array.prototype.map 메서드는 배열의 모든 요소를 이용해 주어진 함수를 호출하는 기능을 수행한 다음 새 배열 반환
[1,2,3].map(function (a) {
    console.log(a);
});

//TODO