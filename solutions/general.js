export const generalExercise = {
    /*
     1. should return logical OR from a and b
     */
    logicalOR: function (a, b) {
        return a || b;
    },


    /*
     2. should return true if a and b are strict equal
     */
    equals: function (a, b) {
        return a === b;
    },


    /*
     3. should return boolean value of a
     */
    booleanType: function (a) {
        return !!a;
    },


    /*
     4. should return true if number is an integer
     */
    integerCheck: function (number) {
        return Number.isInteger(number);
    },


    /*
     5.  should convert °C into °F

     The temperature T in Fahrenheit (°F) is equal to the temperature T in Celsius (°C) 9/5 times plus 32.
     */
    temperatureConversion: function (temperatureInCelsius) {
        return temperatureInCelsius * (9/5) + 32;
    }
};
