
const sum = require('./calculator')

describe('check the operation of 2 numbers', () => {
    test('sum of 2 and 4 must result in 6', () => {
        expect(sum(2, 4)).toBe(6)
    })


})