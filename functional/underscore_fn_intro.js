/**
 * Created by jonghyeok on 2017-03-12.
 */

var _ = require('underscore');

_.find([1,2,3,'4',5], _.isString); // 3, 첫번째 일치

_.reject(['a','b',3,'d'], _.isNumber);//['a','b','d'], false인 전부 반환

_.all([1,2,3,4], _.isNumber); //전부 다 true 이면 true 아니면 false

_.any([1,2,3,'4'], _.isString); //하나라도 true이며 true

var people = [{name: "Rick", age: 30}, {name: "Koko", age: 24}, {name: "Rick", age: 31}];
_.sortBy(people, function (p) { return p.name; });   //age에 따라 정렬
_.groupBy(people, function (p) { return p.name; }); //값에 따라 값 분리
/*
{
    Rick: [{name: "Rick", age: 30}, {name: "Rick", age: 31}],
    Koko: [{name: "Koko", age: 24}]
}
*/

_.countBy(people, function() {return p.name}); // count
// {Rick: 2, Koko: 1};,

