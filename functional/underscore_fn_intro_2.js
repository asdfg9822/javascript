/**
 * Created by jonghyeok on 2017-03-12.
 */

var _ = require('underscore');

var zombie = {name: "Bob", film: "Day of the Dead"};

_.keys(zombie); //["name", "film"];

_.values(zombie); //["Bob", "Day of the Dead"];

var browsers = [
    {name: "ie",     userCount:"100",   maker: "Microsoft"},
    {name: "chrome", userCount:"80",    maker: "Chrome"},
    {name: "safari", userCount:"20",    maker: "Apple"}
];

_.pluck(browsers, 'name'); // ["ie", "chrome", "safari"]

_.pairs(zombie); // [["name", "Bub"], ["film", "Day of the Dead"]]   ,  obj -> 중첩 array

_.invert(zombie); // {"Bob": "name", "Day of the Dead": "film" } ,  key와 value를 서로 바꿔서 반환

_.map(browsers, function (obj) {
    return _.defaults(obj, {ok: "ok"});  // 기본값 추가
});

_.omit(zombie, 'name'); // {film: "Day of the Dead"}
_.omit(zombie, 'name', 'film'); // {}, 해당 프로퍼티 제외하고 반환

_.pick(zombie, 'name'); // {name: "Bob"}, 해당 프로퍼티만 반환

_.findWhere(browsers, {name: "ie"}); // 해당 값이 있는 첫번쨰 객체 반환
_.where(browsers, {name: "ie"}); // 해당 값이 있는 모든 객체 반환
