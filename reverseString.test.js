const reverseString = require('./reverseString')

test('Reverse String is', () => {
    expect(reverseString('length')).toBe('htgnel')
})

test('Reverse String is', () => {
    expect(reverseString('least')).toBe('tsael')
})

test('Reverse String is', () => {
    expect(reverseString('Hello World')).toBe('dlroW olleH')
})