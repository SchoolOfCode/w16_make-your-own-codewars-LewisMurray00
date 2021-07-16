//👉 Write your tests below here:
const {
    hidePhoneNumbers
} = require('./main.js');

test('The hidePhoneNumbers functions returns the set of numbers back but they are replaced with x instead of numbers', ()=>{

    const actual = hidePhoneNumbers([0,7,2,3,6,9,0,5,4,4,3]);
    const expected = '07xxxxxxx43';

    expect(actual).toBe(expected)
});

test('The hidePhoneNumbers functions returns the set of numbers back but they are replaced with x instead of numbers', ()=>{

    const actual = hidePhoneNumbers([0,7,6,9,9,4,4,3,2,7,3]);
    const expected = '07xxxxxxx73';

    expect(actual).toBe(expected)
});

test('The hidePhoneNumbers functions returns the set of numbers back but they are replaced with x instead of numbers', ()=>{

    const actual = hidePhoneNumbers([0,7,7,2,4,4,0,5,4,5,3]);
    const expected = '07xxxxxxx53';

    expect(actual).toBe(expected)
});