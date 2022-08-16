const stringLength = require('./stringLength')

test('String length is', () => {
    expect(stringLength('length')).toBe(6)
})

test('String length is', () => {
    expect(stringLength('b')).toBe(1)
})

test('String length is', () => {
    expect(stringLength('anonymous')).toBe(9)
})