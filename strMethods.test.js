const strMethods = require('./strMethods.js');
const stringLength = strMethods.stringLength;
const stringReverse = strMethods.stringReverse;

describe('String Length', () => {
    test('Character Count', () => {
        expect(stringLength('sajida')).toBe(6);
    })
    
    test('ZERO character', () => {
        expect(() => {
            stringLength('');
        }).toThrow('String cannot contain ZERO character');
    })
    
    test('More than TEN characters', () => {
        expect(() => {
            stringLength('12345678901');
        }).toThrow('String cannot contain more than TEN characters');
    })
})

describe('String Reverse', () => {
    test('String is reversed', () => {
        expect(stringReverse('hello')).toBe('olleh');
    })
})