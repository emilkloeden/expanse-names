const { expect } = require('chai')
const expanse = require('../src/index')

describe('expanse-names', function() {
    describe('all', function() {
        it('Should return a list of strings', function() {
            expect(expanse.all).to.satisfy(isArrayOfStrings)

            function isArrayOfStrings(array) {
                return array.every(function(item) {
                    return typeof item === 'string'
                })
            }
        })
        it('should contain `Jim Holden`', function() {
            expect(expanse.all).to.include('Jim Holden')
        })
    })
    describe('random', function() {
        it('should throw an error if a number <= 0 is passed', function() {
            var error = expanse.random(-1)
            expect(error).to.be.instanceof(Error)
        })
        it('should return a string if no arguments are passed', function() {
            const randomItem = expanse.random()
            expect(randomItem).to.be.a('string')
        })
        it('should return a name from expanse.all if no arguments are passed', function() {
            const randomItem = expanse.random()
            expect(expanse.all).to.include(randomItem)
        })
        it('should return an array of items from expanse.all when called with a number', function() {
            const randomItems = expanse.random(3)
            expect(randomItems).to.satisfy(allRandomItemsPluckedFromSource)

            function allRandomItemsPluckedFromSource(items) {
                return items.every(function(item) {
                   return expanse.all.indexOf(item) > -1
                })
            }
        })
        it('should return an array of length specified by number argument', function() {
            const randomItems = expanse.random(4)
            expect(randomItems.length).to.equal(4)
        })
    })
})