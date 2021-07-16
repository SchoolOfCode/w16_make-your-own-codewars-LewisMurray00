/* 
👉 
You are working in an office and the company keeps a database
on the list of customers that you have, the database contains
the clients email, age, D.O.B, notes and finally their 
phone numbers.

Your boss has asked if you can hide the clients phone numbers
due to security reason

You must do this by replacing all digits of the number, stored in an array, with
the letter "X"

For example: "XXXXX XXXXXX"
*/

//👉 Write the function your CodeWarriors will start with below here:
function hidePhoneNumbers(numbers){

    let stringNumbers = numbers.toString();
    for(let i = 0; i < stringNumbers.length; i++){
    stringNumbers = stringNumbers.replace(stringNumbers[i], 'x').join('');
    };
    return stringNumbers;
};

module.exports = {
    hidePhoneNumbers
};