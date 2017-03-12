/**
 * Created by user on 2017. 2. 14..
 */

//함수의 형태(1)
function add(x, y) {
    return x + y;
}

//함수의 형태(2)
function processNext() {
    var message = InboxQueue.popMessage();

    if(message != null) {
        process(message);
    }
}

function getCurrnentProgram(guide, channge, date) {
    var schedule = guide.getSchedule(channel);

    var current = schedule.programAt(date);

    return current;
}

//자바스크립트에서의 불변성
var greeting = new String('Hello World!!');

greeting.replace('World', 'Gil-dong');
greeting.valueOf();

console.log(greeting);

//새로운 값 대입
var greeting = new String('Hello World!!');

greeting = greeting.replace('World', 'Gil-dong');
greeting.valueOf();

console.log(greeting);


var _ = require('underscore');

// sort() 는 인자로 비교기를 넣지 않으면 String 비교를 한다
// 예상한 결과가 제대로 나오지 않음

var test1 = [2,3,-1,-6,0,-108,42,10].sort();
console.log(test1);

//다음과 같이 활용할 수 있다
var test1_1 = ["안철수", "문제인", "박근혜", "박근령", "이명박", "김정식"];
console.log(test1_1.sort());

var test2 = [2,3,-1,-6,0,-108,42,10].sort(function(x, y) {
    if(x > y) {
        return -1;
    }
    if(x < y) {
        return 1;
    }
    return 0;
});
console.log(test2);

//위의 방법보다는 다음에 비교기를 또 사용할 수 있도록 Named Function으로 만든다
var compareLessThanOrEqual = function(x, y) {
    if(x > y) {
        return -1;
    }
    if(x < y) {
        return 1;
    }
    return 0;
};
var test3 = [2,3,-1,-6,0,-108,42,10].sort(compareLessThanOrEqual);
console.log(test3);

//아래의 경우는 0을 반환하기 때문에 값이 출력되지 않는다. 예상치 못한 동작
//Javascript에서 0은 false로 인식
if(compareLessThanOrEqual(1,1)) {
    console.log("값이 같다");
}

//원하는 동작을 위해 Predicate(찬반형) 함수를 사용한다. 그렇다면 값이 True/False가 된다
if(_.contains([0, -1], compareLessThanOrEqual(1,1))) {
    console.log("값이 같다2");
}

//위에서 구현한 방식은 contains에서 0,1과 내부 구현인 compareLessThanOrEqual에서 0,1이 참이라는 것을 동시에 알아야 한다.
//만약 이 상황에서 음수 비교를 위해 compareLessThanOrEqual의 반환값을 -42로 바꾼다면 contains도 동시에 바껴야 한다

//비교기를 항상 Boolean형을 반환하는 찬반형 함수로 만든다
var lessOrEqual = function(x, y) {
    return x <= y;
}
var test4 = [2,3,-1,-6,0,-108,42,10].sort(lessOrEqual);
console.log(test4);

//sort 함수에서 사용하는 비교기는 -1/0/1 중 하나를 반환해야 한다
//comparator는 참반형 함수를 인자로 받아 결과를 -1/0/1로 바꾸어 준다
//TODO 이부분 잘 이해가 가지 않음

var comparator = function (pred) {
    return function(x, y) {
        if(!pred(x,y)) {
            return -1;
        } else if(pred(x,y)) {
            return 1;
        } else {
            return 0;
        }
    };
}

var test5 = [2,3,-1,-6,0,-108,42,10].sort(comparator(lessOrEqual));
console.log(test5);

//lessOrEqual이 아닌 _.isEqual함수를 사용한다
//아래의 결과는 모든 찬반형 함수를 사용할 수 없다는 것을 보여준다
//TODO 위 부분과 같이 확인

var test6 = [100,1,0,10,-1,-2, -1].sort(comparator(_.isEqual));
console.log(test6); //[ 2, 3, -1, -6, 0, -108, 42, 10 ]
