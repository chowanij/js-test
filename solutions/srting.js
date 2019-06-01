export const stringExercise = {
    /*
     1. should return reversed inputString
     */
    reverse: function (inputString) {
        return inputString.split('').reverse().join('');
    },

    /*
     2. should check if input is a palindrom

     eg.

     isPalindrom('otto') // true
     isPalindrom('lama') // false
     isPalindrom('101') // true
     */

    isPalindrom: function (input) {
        const inputReversed = input.split('').reverse();

        for (let i = 0; i < input.length; i++) {
            if (input[i] !== inputReversed[i]) {
                return false;
            }
        }

        return true;
    }
};