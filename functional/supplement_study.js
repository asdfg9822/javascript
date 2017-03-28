/**
 * Created by user on 2017. 3. 29..
 */

//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce


/*
Reduce 함수에서 Callback 함수의 인자(Arguments)는 4개를 취함

1) previousValue - 이전 마지막 콜백 호출에서 반환된 값 또는 공금된 경우 initialValue
2) currentValue - 배열 내 현재 처리되고 있는 요소(element)
3) currentIndex - 배열 내 처리되고 있는 요소의 인덱스
4) array - reduce에 호출되는 배열

*/

var _ = require('underscore');
var testObj = {name: "ie", userCount:100, maker: "Microsoft", deepObj: { name: 3}};

//특정 Object에서 Key를 받아서 제거하는 함수를 만듬
function omit(targetObj, omitKeys) {
    var returnObj = {};

    for(var key in targetObj) {
        if(targetObj.hasOwnProperty(key) && omitKeys.indexOf(key) < 0) {
            returnObj[key] = targetObj[key];
        }
    }

    return returnObj;
}

//Obj 자신이 가지고 있는 Key들의 배열을 반환
function getKeys(obj) {
    var resultArr = [];
    for(var key in obj) {
        if(obj.hasOwnProperty(key)) {
            resultArr.push(key);
        }
    }
    return resultArr;
}

/*

Array.prototype.reduce != _.reduce(underscore.js)
Array.prototype.reduce의 경우에는 배열에서만 사용 가능
_.reduce는 Object에 대해서도 사용 가능

*/

function rename(targetObj, renameObj) {
    return _.reduce(targetObj, function (previousValue, currentValue, currentIndex, originArray) {

        if(renameObj.hasOwnProperty(currentIndex)) { //변경할 Key가 target에 존재하면 true
            previousValue[renameObj[currentIndex]] = currentValue; //변경할 이름으로 현재의 값을 넣어줌
            return previousValue;
        } else {
            return previousValue
        }

    }, omit(targetObj, getKeys(renameObj))); //defualt값 세팅, 변경할 Key가 있으면 제거함
}

//omit(testObj, getKeys(testObj));

console.log(rename(testObj, {name: "title"}));
