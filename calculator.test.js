
const Calculator = require('./calculator')

describe('Add two numbers function', () => {
    const calculate = new Calculator();

    test('4 + 7 = 11', () => {
        expect(calculate.add(4, 7)).toBe(11)
    })

    test('8 + 6 = 14', () => {
        expect(calculate.add(8, 6)).toBe(14)
    })

    test('7 + 2 = 9', () => {
        expect(calculate.add(7, 2)).toBe(9)
    })

    test('3 + 5 = 8', () => {
        expect(calculate.add(3, 5)).toBe(8)
    })
})

describe('Subtract two numbers function', () => {
    const calculate = new Calculator();

    test('7 - 4 = 3', () => {
        expect(calculate.subtract(7, 4)).toBe(3)
    })

    test('8 - 6 = 2', () => {
        expect(calculate.subtract(8, 6)).toBe(2)
    })

    test('7 - 2 = 5', () => {
        expect(calculate.subtract(7, 2)).toBe(5)
    })

    test('5 - 3 = 2', () => {
        expect(calculate.subtract(5, 3)).toBe(2)
    })
})

describe('Divide two numbers function', () => {
    const calculate = new Calculator();

    test('12 / 3', () => {
        expect(calculate.divide(12, 3)).toBe(4)
    })

    test('8 / 2 = 4', () => {
        expect(calculate.divide(8, 2)).toBe(4)
    })

    test('6 / 2 = 3', () => {
        expect(calculate.divide(6, 2)).toBe(3)
    })

    test('6 / 3 = 2', () => {
        expect(calculate.divide(6, 3)).toBe(2)
    })
})

describe('Multiply two numbers function', () => {
    const calculate = new Calculator();

    test('4 * 7 = 28', () => {
        expect(calculate.multiply(4, 7)).toBe(28)
    })

    test('8 * 6 = 48', () => {
        expect(calculate.multiply(8, 6)).toBe(48)
    })

    test('5 * 3 = 15', () => {
        expect(calculate.multiply(5, 3)).toBe(15)
    })

    test('2 * 9 = 18', () => {
        expect(calculate.multiply(2, 9)).toBe(18)
    })
})