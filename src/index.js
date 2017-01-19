const names = require('./expanse-names.json')
const { randomFromArray } = require('./utils.js')

function random(number=1) {
    if (number === 1) {
        return randomFromArray(names)
    }
    else if (number <= 0) {
        return new Error("'number' argument of 'random' method must be greater than 0 (if passed)")
    }
    else {
        let randomNames = []
        for (i = 0; i < number; i++) {
            randomNames.push(randomFromArray(names))
        }
        return randomNames
    }
}

module.exports = {
    all: names,
    random: random
}

