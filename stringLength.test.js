const stringLength = require('./stringLength')

test('String length is', () => {
    expect(stringLength('length')).toBe(6)
})