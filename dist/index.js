'use strict';

var names = require('./expanse-names.json');

var _require = require('./utils.js'),
    randomFromArray = _require.randomFromArray;

function random() {
    var number = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

    if (number === 1) {
        return randomFromArray(names);
    } else if (number <= 0) {
        return new Error("'number' argument of 'random' method must be greater than 0 (if passed)");
    } else {
        var randomNames = [];
        for (i = 0; i < number; i++) {
            randomNames.push(randomFromArray(names));
        }
        return randomNames;
    }
}

module.exports = {
    all: names,
    random: random
};