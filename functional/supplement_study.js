/**
 * Created by user on 2017. 3. 29..
 */

//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce


/*
Callback 함수의 인자(Arguments)는 4개를 취함

1) previousValue - 이전 마지막 콜백 호출에서 반환된 값 또는 공금된 경우 initialValue
2) currentValue - 배열 내 현재 처리되고 있는 요소(element)
3) currentIndex - 배열 내 처리되고 있는 요소의 인덱스
4) array - reduce에 호출되는 배열

*/

var _ = require('underscore');
var testObj = {name: "ie", userCount:100, maker: "Microsoft", deepObj: { name: 3}};

//Omit - 객체에서 인자로 전달한 인자를 Key로 가진 프로퍼티를 제거함
var omitObj = (function(){
    var args = Array.prototype.slice.call(arguments);

    var obj = this;
    var returnObj = {};

    for(var key in obj) {
        if(obj.hasOwnProperty(key) && args.indexOf(key) < 0) {
            returnObj[key] = obj[key];
        }
    }

    return returnObj;

}).call(testObj, 'name', 'userCount');

function omit(targetObj, omitKeys) {
    var returnObj = {};

    for(var key in targetObj) {
        if(targetObj.hasOwnProperty(key) && omitKeys.indexOf(key) < 0) {
            returnObj[key] = targetObj[key];
        }
    }

    return returnObj;
}

function getKeys(obj) {
    var resultArr = [];
    for(var key in obj) {
        if(obj.hasOwnProperty(key)) {
            resultArr.push(key);
        }
    }
    return resultArr;
}

function rename(targetObj, renameObj) {
    return Array.prototype.reduce.call(getKeys(targetObj), function (previousValue, currentValue, currentIndex, originArray) {
        //
    }, omit(targetObj, getKeys(targetObj)));
}

console.log(rename(testObj, {name: "title"}));

/*


Array.prototype.reduce.call(null, function(previousValue, currentValue, currentIndex, originArray) {

}, omitObj);*/
