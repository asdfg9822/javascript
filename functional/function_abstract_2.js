/**
 * Created by jonghyeok on 2017-03-07.
 */

var _ = require('underscore');


//함수는 뷰에서 세부 구현을 숨김으로써 추상화를 할 수 있다
function parseAge(age) {
    if(!_.isString(age)) throw new Error("Expecting a string"); // 에러

    var a;

    console.log("Attempting to parse an age"); //로그

    a = parseInt(age, 10);

    if (_.isNaN(a)) {
        console.log(["[Could not parse age:]", age].join(' ')); //경고
    }

    return a;
}

//parseAge("42");
// parseAge(42);
parseAge("nonoo");


function fail(thing) {
    throw new Error(thing);
}

function warn(thing) {
    console.log(["WARNING:", thing].join(' '));
}

function info(thing) {
    console.log(["info:", thing].join(' '));
}