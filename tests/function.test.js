import {functionsExercise} from '../exercises/functions';
import {expect} from 'chai';

describe('Function', () => {
    it('1. should return function that will return incremented value passed as an argument', () => {
        const returnedValue = functionsExercise.returnFunction();

        expect(returnedValue).to.be.a('function');
        expect(returnedValue(5)).to.equal(6);
    });

    it('2. Should print triangle', () => {
        expect(functionsExercise.printTriangle(1)).to.equal('#');
        expect(functionsExercise.printTriangle(2)).to.equal('#\n##');
        expect(functionsExercise.printTriangle(3)).to.equal('#\n##\n###');
        expect(functionsExercise.printTriangle(6)).to.equal('#\n##\n###\n####\n#####\n######');
    });
});