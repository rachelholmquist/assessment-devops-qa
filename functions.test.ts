const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test('be the same length as the length of the array passed in', () => {
        expect(shuffleArray.length).toEqual(Array.length);
    });
    test('should return an array', () => {
        expect(shuffleArray([2,3,4])).toBeInstanceOf(Array);
    })
})