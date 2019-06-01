import { arrayExercise } from '../exercises/array';
import { expect } from 'chai';

describe('Array', () => {
    it('1. should return last element from array', () => {
        const array = [ 1, 2, 3 ];

        expect(arrayExercise.lastElement(array)).to.eql(3);
    });

    it('2. should return true if input is an array', () => {
        expect(arrayExercise.arrayCheck([])).to.be.true;
        expect(arrayExercise.arrayCheck([ 1, 2 ])).to.be.true;
        expect(arrayExercise.arrayCheck('')).to.be.false;
        expect(arrayExercise.arrayCheck('[]')).to.be.false;
    });

    it('3. should remove items from array', () => {
        let array = [ 1, 2, 2, 3 ];
        let array2 = [ 'a', 'b', 'b', 'c' ];

        arrayExercise.arrayElementsRemove(array, 3);
        arrayExercise.arrayElementsRemove(array2, 'b');

        expect(array).to.eql([ 1, 2, 2 ]);
        expect(array2).to.eql([ 'a', 'c' ]);
    });

    it('4. should return maximum number value from array', () => {
        expect(arrayExercise.maximumValue([ 1, 4, 7, 5, 2, 8 ])).to.equal(8);
        expect(arrayExercise.maximumValue([ 5 ])).to.equal(5);
        expect(arrayExercise.maximumValue([ '4', 1, 2 ])).to.equal(2);
        expect(arrayExercise.maximumValue([ '-10', -9, -8 ])).to.equal(-8);
        expect(arrayExercise.maximumValue([ 3.5, -2.6, 2.8 ])).to.equal(3.5);
        expect(arrayExercise.maximumValue([ -3.5, 11.2, null, undefined ])).to.equal(11.2);
        expect(arrayExercise.maximumValue([ -11, 101, 111, 1002 ])).to.equal(1002);
    });

    it('5. should return merged array without duplicates', () => {
        expect(arrayExercise.arrayMerge(
            [ 1, 2, 3, 4 ],
            [ 3, 4, 5, 6 ]
        )).to.eql([ 1, 2, 3, 4, 5, 6 ]);
        expect(arrayExercise.arrayMerge(
            [ 'a', 'b', null, '4' ],
            [ 4, 'b', 34.6, {} ]
        )).to.eql([ 'a', 'b', null, '4', 4, 34.6, {} ]);
    });

    it('6. should insert fruits to array based on the object schema', () => {
        expect(arrayExercise.getFruitsArray({
            apple: 1,
            banana: 2,
            mango: 3,
        })).to.eql(['apple', 'banana', 'banana', 'mango', 'mango', 'mango']);
        expect(arrayExercise.getFruitsArray({
            strawberry: 2,
            plum: 2,
            raspberry: 3,
        })).to.eql(['strawberry', 'strawberry', 'plum', 'plum', 'raspberry', 'raspberry', 'raspberry']);
    });

    it('Should calculate average score based on the array of marks', () => {
        expect(arrayExercise.calculateAverage(['2', '3', '4+', '6'])).to.eql(3.88);
        expect(arrayExercise.calculateAverage(['4', '3', '4'])).to.eql(3.67);
        expect(arrayExercise.calculateAverage(['4', '6', '5+', '3+'])).to.eql(4.75);
    });
});