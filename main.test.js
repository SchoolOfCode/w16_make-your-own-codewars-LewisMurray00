//👉 Write your tests below here:
const {
    hidePhoneNumbers
} = require('main.js');

test('The hidePhoneNumbers functions returns the set of numbers back but they are replaced with x instead of numbers', ()=>{

    const actual = hidePhoneNumbers([0,7,2,3,6,9,0,5,4,4,3]);
    const expected = 'xxxxxxxxxxx';

    expect(actual).toBe(expected)
});
