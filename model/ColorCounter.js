'use strict';

function ColorCounter () {
    var counters = {
        blue: 0,
        red: 0,
        green: 0
    },
    events = {
        change: []
    };

    this.toJSON = function () {
        var json = {},
            color;

        for (color in counters) {
            json[color] = counters[color];
        }

        return json;
    };

    this.increaseCount = function (color) {
        counters[color]++;
        trigger('change', color);
    };

    this.on = function (eventName, callback) {     
        events[eventName].push(callback);
    };

    function trigger (eventName, args) {
            events[eventName].forEach(function (callback) {
                callback(args);
            });                           
    };
}