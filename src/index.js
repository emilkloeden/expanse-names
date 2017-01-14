const names = require('./expanse-names.json')
const { randomFromArray } = require('./utils.js')

function random(number=undefined) {
    if (number === undefined) {
        return randomFromArray(names)
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

