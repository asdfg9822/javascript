/**
 * Created by jonghyeok on 2017-03-09.
 */

var _ = require('underscore');

/*
* '테이블 형식'의 데이터
*/

/*
TABLE - library

name        userCount       maker
----------------------------------
ie          100             Microsoft
chrome      80              Google
safari      30              Apple
*/

var browsers = [
    {name: "ie",     userCount:100,   maker: "Microsoft"},
    {name: "chrome", userCount:80,    maker: "Chrome"},
    {name: "safari", userCount:20,    maker: "Apple"}
];

//SELECT title FROM library
var result = _.pluck(browsers, 'name');
//console.log(result);


//cat은 함수를 인자로 받지 않으니 응용형이 아님
function cat() {
    var head = _.first(arguments);
    if(existy(head)) {
        return head.concat.apply(head, _.rest(arguments));
    } else {
        return [];
    }
}

//용소와 배열을 인자로 받아 배열 앞에 요소를 추가하는 함수인 construct도 응용형 함수가 아니다
function construct(head, tail) {
    return cat([head], _.toArray(tail));
}

function existy(x) {return x != null};
function truthy(x) {return (x !== false) && existy(x) };

// _.pluck 함수의 결과는 테이블 추상화가 아님
// SQL Select 문과 비슷한 기능을 수행하는 기능을 수행하는 함수가 필요
function select(table, keys) {
    return _.map(table, function (obj) {
        return _.pick.apply(null, construct(obj, keys));
    });
}

/*
 function select(table, keys) {
    return _.map(table, function (obj) {
        return _.pick(obj, keys);
    });
 }
* */

var result = select(browsers, ['name']);
console.log(result);

var result = select(browsers, ['name', 'maker']);
console.log(result);

var result = select(result, ['name']);
//console.log(result);

//마지막 데이터를 활용할 때는 목적에 따라 추상화가 깨져도 괜춘
var result = _.pluck(result, ['name']);
// console.log(result);

//SELECT name AS title FROM browsers;

function rename(obj, newNames) {
    return _.reduce(newNames, function (o, nu, old) {
        if(_.has(obj, old)) {
            o[nu] = obj[old];
            return o;
        } else
            return o;

    },
    _.omit.apply(null, construct(obj, _.keys(newNames))));
}

function as(table, newNames) {
    return _.map(table, function (obj) {
       return rename(obj, newNames);
    });
}

var result = as(browsers, {name: "title"});
console.log(result);

// where 절 역할을 하는 함수
function where(table, pred) {
    return _.reduce(table, function (newTable, obj) {
        if( truthy(pred(obj))) {
            return newTable;
        } else
            return _.without(newTable, obj);
    }, table);
}

var result = where(browsers, function (browser) {
    return browser.userCount > 50;
});

 console.log(result);


var result = where(select(as(browsers, {maker: 'brand'}), ['name', 'brand']), function (browser) {
    return browser.name === "ie";
});
console.log(result);