const { expect } = require('expect')
const stringLength = require('./stringLength')

test('String length is', () => {
    expect(stringLength('length')).toBe(6)
})

test('String length is', () => {
    expect(stringLength('bot')).toBe(3)
})

test('String length is', () => {
    expect(stringLength('anonymous')).toBe(9)
})

test('String length more than 10 char', () => {
    expect(() => {
        stringLength('ethnological')
    }).toThrow();
})

test('No String', () => {
    expect(() => {
        stringLength('')
    }).toThrow();
})