export const arrayExercise = {
    /*
     1. should return last element from array
     */

    lastElement: function (array) {
        return array[array.length - 1]
    },


    /*
     2. should return true if input is an array
     */
    arrayCheck: function (input) {
        return Array.isArray(input)
    },


    /*
     3. should remove all items from 'array', that are equal to 'element'

     eg.
     let array = [1, 2, 2, 3]
     arrayElementsRemove(array, 2);

     //[1, 3]
     */
    arrayElementsRemove: function (array, element) {
        for (var i = array.length - 1; i >= 0; i--) {
            array[i] === element && array.splice(i, 1);
        }
    },


    /*
     4. should return maximum number value from array

     eg.
     [1,2,3,4,'5']

     // 4
     */
    maximumValue: function (array) {
        const arrayFiltered = array.filter(item => typeof item === 'number');
        arrayFiltered.sort((a, b) => a - b);
        return arrayFiltered[arrayFiltered.length - 1];
    },


    /*
     5. should return merged array without duplicates
     */
    arrayMerge: function (array1, array2) {
        return array1.concat(array2).filter((item, index, array) => array.indexOf(item) === index);
    },


    /*
     6. should insert fruits to array based on the object schema: { fruitName: amount }

     eg.

     const input = {
        banana: 2,
        apple: 3,
        mango: 1
     };

     // ['banana', 'banana', 'apple', 'apple', 'apple', 'mango']
     */

    getFruitsArray: function (fruitsObject) {
        const array = [];

        Object.keys(fruitsObject).forEach(fruitName => {
            const fruitsAmount = fruitsObject[fruitName];

            for (let i = 0; i < fruitsAmount; i++) {
                array.push(fruitName);
            }
        });

        return array;
    },
};