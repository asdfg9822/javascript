/**
 * Created by user on 2017. 3. 13..
 */

var _ = require('underscore');

var person = {
    approvalRate: '5%',
    name: 'park'
};

_.defaults(person, {job: 'unemployed'});
//console.log(person);


function jobPerson(obj, job) {
    return _.defaults(obj,{job: job || 'unemployed'});
}

var result = jobPerson({ok:"ok"});
console.log(result);

var result = jobPerson({ok:"ok"}, "programmer");
console.log(result);


