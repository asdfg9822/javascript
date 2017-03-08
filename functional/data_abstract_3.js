/**
 * Created by jonghyeok on 2017-03-08.
 */
var _ = require('underscore');

//최소한의 데이터 형식을 이용해서 추상화(트리, 테이블 등)를 표현하는 방법을 공부

//자바스크립트 객체를 데이터 맵으로 접근하고 다루는 도구를 자체적으로 제공하지는 않지만
//언더스코어 에서는 _.keys, _.values, _.pluck 등이 있다. _.keys와 _.values는 객체를 인자로 받아 그것의 키 또는 값에 해당하는 배열을 반환한다

var zombie = {name: "Bob", film: "Day of the Dead"};

var result = _.keys(zombie);
console.log(result);

var result = _.values(zombie);
console.log(result);

var zombies = [
    {name: "Bob", film: "Day of the Dead"},
    {name: "Bob2", film: "Day of the Dead2"},
    {name: "Bob3", film: "Day of the Dead3"}
];

var result = _.pluck(zombies, "name");
console.log(result);

var result = _.pairs(zombie, function (pair) {
    console.log("pair[0] : ", pair[0]);
    return [pair[0].toUpperCase(), pair[1]];
});
console.log(result);

var result = _.object(_.map(_.pairs(zombie), function (pair) {
    return [pair[0].toUpperCase(), pair[1]];
}));
console.log(result);

var result = _.invert(zombie);
console.log(result);

var zombies = [
    {name: "Bob", film: "Day of the Dead"},
    {name: "Bob2", film: "Day of the Dead2"},
    {name: "Bob3"}
];

var result = _.map(zombies, function (obj) {
    return _.defaults(obj, {film: "I donw know", ok: "ok"});
});
console.log(result);

var person = {name: "OmitTest", token: "tokenzzang", password: "password123!"};
var result = _.omit(person, "token", "password");
console.log(result);

var result = _.pick(person, "token", "password");
console.log(result);

var zombies = [
    {name: "Bob", film: "Day of the Dead"},
    {name: "Bob2", film: "Day of the Dead2"},
    {name: "Bob3", film: "Day of the Dead3"}
];

var result = _.findWhere(_.map(zombies, function (obj) {
    return _.defaults(obj, {ok: "ok"});
}), {name: "Bob2", ok:"ok"});
console.log(result);

var result = _.where(_.map(zombies, function (obj) {
    return _.defaults(obj, {ok: "ok"});
}), {ok:"ok"});
console.log(result);