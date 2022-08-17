const capitalize = require('./capitalize')

test('First char of  String is Capital', () => {
    expect(capitalize('Length')).toBe('L')
})
test('First char of  String is Capital', () => {
    expect(capitalize('Bride')).toBe('B')
})