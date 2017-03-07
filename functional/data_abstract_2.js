/**
 * Created by jonghyeok on 2017-03-07.
 */
var _ = require('underscore');

//existy : 값이 있는지

//truthy : 꼭 사실은 아니지만 사실 같은

function existy(x) {return x != null};
function truthy(x) {return (x !== false) && existy(x) };

console.log(existy(null));
console.log(existy(undefined));
console.log(existy(0));
console.log(existy(false));

console.log(truthy(false));
console.log(truthy(undefined));
console.log(truthy(0));
console.log(truthy(''));

var condition = true, doSomething;

/*if(condition) {
    return _.isFunction(doSomething) ? doSomething() : doSomething;
} else {
    return undefined;
}*/

function doWhen(condition, action) {
    if(truthy(condition)) {
        return action();
    } else {
        return undefined;
    }
}

function excuteIfHasField(target, name) {
    return doWhen(existy(target[name]), function () {
        var result = _.result(target, name);
        console.log("the result is ", result);
        return result;
    });
}

excuteIfHasField([1,2,3], 'reverse');
excuteIfHasField([1,2,3], '1');
excuteIfHasField({foo: 3}, 'foo');
excuteIfHasField({foo: 3}, 'foo2');

/*
여기까지 결론
[함수형 프로그래밍은.. !!]
함수 형태로 '존재'의 추상화를 정의
기존 함수를 이용해서 '참거짓'의 추상화를 정의
위 함수를 다른 함수의 파라미터로 제공해서 어떤 동작을 하게 한다
*/

//함수형이 프로그래밍 속도가 걱정된다면 ?
//최적화 등 방법 이용 및 함수가 아닌 Native Code로 변경 --> 코드 인라이닝