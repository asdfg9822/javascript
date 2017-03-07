/**
 * Created by jonghyeok on 2017-03-07.
 */
var _ = require('underscore');

/*
 * name,     age,    hair   --> Header
 * Merble,   35,     red
 * Bob,      64,     blue
 * */

function lameCSV(str) {
    return _.reduce(str.split("\n"), function (table, row) {
        table.push(_.map(row.split(","), function (c) {return c.trim();}));
        return table;
    }, []);
}

var peopleTable = lameCSV("name, age, hair\nMerble, 35, red\n Bob, 64, blue");

console.log("--result--\n", peopleTable);

//Array.prototype.slice.call(target, 1);
var result = _.rest(peopleTable);
console.log("--content--\n", result);

function selectAges(table) {
    return _.rest(_.map(table, function (row) {
        return row[1];
    }));
}

console.log("--selectAges--\n", selectAges(peopleTable));

function selectNames(table) {
    return _.rest(_.map(table, function (row) {
        return row[0];
    }));
}

console.log("--selectNames--\n", selectNames(peopleTable));

function mergeInfo(arr1, arr2) {
    var returnArr = [];
    for(var i=0, len=arr1.length; i<len; i++) {
        returnArr.push([arr1[i],arr2[i]]);
    }
    return returnArr;
}

console.log("--mergeInfo--\n", mergeInfo(selectAges(peopleTable), selectNames(peopleTable)));

