const { expect } = require('chai')
const utils = require('../src/utils.js')
const { randomFromArray } = utils

describe('utils', function() {
    describe('randomFromArray', function() {
        it('Should return a single item from a source array', function() {
            const array = [1, 2, 3]
            const plucked = randomFromArray(array)
            expect(array).to.include(plucked)
        })
        
    })

})