import { generalExercise } from '../exercises/general';
import { expect } from 'chai';

describe('General', () => {
    it('1. should return logical OR from a and b', () => {
        expect(generalExercise.logicalOR(true, false)).to.be.true;
        expect(generalExercise.logicalOR(true, true)).to.be.true;
        expect(generalExercise.logicalOR(false, false)).to.be.false;
    });

    it('2. should return true if a and b are equal', () => {
        expect(generalExercise.equals(true, 'true')).to.be.false;
        expect(generalExercise.equals(0, false)).to.be.false;
        expect(generalExercise.equals(2, 2)).to.be.true;
        expect(generalExercise.equals(null, {})).to.be.false;
        expect(generalExercise.equals(undefined, null)).to.be.false;
    });

    it('3. should return boolean value from a', () => {
        expect(generalExercise.booleanType(true)).to.be.true;
        expect(generalExercise.booleanType(false)).to.be.false;
        expect(generalExercise.booleanType('')).to.be.false;
        expect(generalExercise.booleanType('a')).to.be.true;
    });

    it('4. should return true if number is an integer', () => {
        expect(generalExercise.integerCheck('1')).to.be.false;
        expect(generalExercise.integerCheck(10)).to.be.true;
        expect(generalExercise.integerCheck(false)).to.be.false;
        expect(generalExercise.integerCheck(2.5)).to.be.false;
        expect(generalExercise.integerCheck(null)).to.be.false;
    });

    it('5.  should convert °C into °F', () => {
        const roundOnDecimal = (number) => {
            return Math.round( number * 10 ) / 10;
        };

        expect(roundOnDecimal(generalExercise.temperatureConversion(-50))).to.be.equal(-58);
        expect(roundOnDecimal(generalExercise.temperatureConversion(0))).to.be.equal(32);
        expect(roundOnDecimal(generalExercise.temperatureConversion(10))).to.be.equal(50);
        expect(roundOnDecimal(generalExercise.temperatureConversion(21))).to.be.equal(69.8);
    });
});