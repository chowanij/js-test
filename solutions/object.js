export const objectExercise = {
    /*
     1. should remove key, given as an argument, from object
     */
    removeKey: function (object, key) {
        delete object[key];
    },



    /*
    2.  fruitArray is an array containing fruits names.
        Function should return an object where key is a name of fruit, and value is value is the number of occurrences of a given fruit

        eg

            fruitArray = ['banana', 'strawberry', 'apple', 'apple']

            should return

            {
                banana: 1,
                strawberry: 1,
                apple: 2
            }

     */
    countOccurences: function (fruitArray) {
        const countObject = {};

        fruitArray.forEach(item => {
            if(countObject[item]) countObject[item] = countObject[item] +1;
            else countObject[item] = 1;
        });

        return countObject;
    },



    /*
    3. should convert object into an array of [key, value] pairs
     */
    convertObject: function(object) {
        const returnArray = [];

        Object.keys(object).map(key => returnArray.push([key, object[key]]));

        return returnArray;
    },



    /*
    4. should return concated objects
     */
    objectMerge: function (obj1, obj2) {
        return {
            ...obj1,
            ...obj2,
        };
    }
};