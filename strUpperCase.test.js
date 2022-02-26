const { expect, it } = require('@jest/globals')
const toUpperCase = require('./strUpperCase.js')

describe('Testing Input', () => {
    it('Input is String', () => {
        expect( () => {
            toUpperCase(10);
        }).toThrow('Input is not a string');
    })

    it('String is not empty', () => {
        expect( () => {
            toUpperCase('');
        }).toThrow('String must not be empty');
    })
})

describe('Testing output', () => {
    it('Testing ALL CAPITALS', () => {
        expect(toUpperCase('AWAIS')).toBe('Awais');
    })

    it('Testing all lowercase', () => {
        expect(toUpperCase('aftab')).toBe('Aftab');
    })
})