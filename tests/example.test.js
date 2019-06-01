import { exampleExercise } from '../exercises/example';
import { expect } from 'chai';

describe('Example', () => {
    it('1. should return incremented argument', () => {
        expect(exampleExercise.increment(0)).to.equal(1);
        expect(exampleExercise.increment(5)).to.equal(6);
    });
});