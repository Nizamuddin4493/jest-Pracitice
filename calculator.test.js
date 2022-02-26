const Calculator = require('./calculator.js')

describe('Addition', () => {
    const addObj = new Calculator();
    it('Not a number', () => {
        expect(() => {
            addObj.add('1', 5)
        }).toThrow('Cannot ADD \"not a number\"');
    })

    it('Missing argument', () => {
        expect(() => {
            addObj.add(5)
        }).toThrow('Argument is missing');
    }) 

    it('Addition of numbers', () => {
        expect(addObj.add(1,5)).toBe(6);
    }) 
})

describe('Subtraction', () => {
    const addObj = new Calculator();
    it('Not a number', () => {
        expect(() => {
            addObj.subtract('3', 1)
        }).toThrow('Cannot SUBTRACT \"not a number\"');
    })

    it('Missing argument', () => {
        expect(() => {
            addObj.subtract(5)
        }).toThrow('Argument is missing');
    }) 

    it('Subrtaction of numbers', () => {
        expect(addObj.subtract(3,1)).toBe(2);
    }) 
})

describe('Multiplication', () => {
    const addObj = new Calculator();
    it('Not a number', () => {
        expect(() => {
            addObj.multiply('3', 4)
        }).toThrow('Cannot Multiply \"not a number\"');
    })

    it('Missing argument', () => {
        expect(() => {
            addObj.multiply(4)
        }).toThrow('Argument is missing');
    }) 

    it('Multiplication of numbers', () => {
        expect(addObj.multiply(3,4)).toBe(12);
    }) 
})

describe('Division', () => {
    const addObj = new Calculator();
    it('Not a number', () => {
        expect(() => {
            addObj.divide('20', 4)
        }).toThrow('Cannot Divide \"not a number\"');
    })

    it('Missing argument', () => {
        expect(() => {
            addObj.divide(20)
        }).toThrow('Argument is missing');
    }) 

    it('Division of numbers', () => {
        expect(addObj.divide(20,4)).toBe(5);
    }) 
})