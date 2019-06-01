export const functionsExercise = {
    /*
     1. should return function that will return incremented value passed as an argument
     */
    returnFunction: function () {
        return value => value + 1;
    },


    /*
    2. Should print triangle based on the number of lines

        eg
            printTriangle(1) // '#'
            printTriangle(2) // '#\n##'
            printTriangle(3) // '#\n##\n###'
     */
    printTriangle: function (lines) {
        let result = '#';

        if (lines == 1) return result;

        for (let i = 2; i <= lines; i++) {
            result += '\n';

            for (let b = 1; b <= i; b++) result += '#';
        }

        return result;
    }
};