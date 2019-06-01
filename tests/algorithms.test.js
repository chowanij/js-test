import { algorithmsExercise } from '../exercises/algorithms';
import { expect } from 'chai';

describe('Algorithms', () => {
    it('1. should return n-th number of fibonacci sequence', () => {
        expect(algorithmsExercise.fibonacci(10)).to.equal(55);
        expect(algorithmsExercise.fibonacci(6)).to.equal(8);
        expect(algorithmsExercise.fibonacci(0)).to.equal(0);
        expect(algorithmsExercise.fibonacci(1)).to.equal(1);
        expect(algorithmsExercise.fibonacci(2)).to.equal(1);
        expect(algorithmsExercise.fibonacci(18)).to.equal(2584);
    });

    it('2. Sieve of Eratosthenes', () => {
        expect(algorithmsExercise.eratosthenesSieve(0)).to.eql([]);
        expect(algorithmsExercise.eratosthenesSieve(1)).to.eql([]);
        expect(algorithmsExercise.eratosthenesSieve(10)).to.eql([2, 3, 5, 7]);
        expect(algorithmsExercise.eratosthenesSieve(20)).to.eql([2, 3, 5, 7, 11, 13, 17, 19]);
    })
});