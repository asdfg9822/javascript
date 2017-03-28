/**
 * Created by jonghyeok on 2017-03-27.
 */

var c;

// c에 의존적
function hasShareState(a,b){
    return (c) ? a + b : a/b;
}

Polymer({
    is: 'test-element',
    properties: {
        sharedState: {
            type: Object,
            value: function () {
                return {};
            }
        }
    },

    sharedMethod: function () {
        var sharedState = me.get("sharedState");
        // some working ..
    },

    callMethod: function () {
        this.nonSharedMethod(me.get("sharedState")); //obj -> arguments -> call  by reference -> none pure function
    },

    nonSharedMethod: function (sharedState) {
        //some working..
    },

    behaviors :[
        Polymer.NonSharedBehavior
    ]
});