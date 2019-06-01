import { objectExercise } from '../exercises/object';
import { expect } from 'chai';

describe('Object', () => {
    it('1. should remomve key, given as an argument, from object', () => {
        const object = {a: 1, b: 2};
        objectExercise.removeKey(object, 'a');

        expect(object).to.eql({b: 2});
    });

    it('2. should count count occurences', () => {
        const array = [ 'a', 'b', 'b', 'c', 'd', 'd', 'd' ];

        expect(objectExercise.countOccurences(array)).to.eql({a: 1, b: 2, c: 1, d: 3});
    });

    it('3. should convert object into an array of [key, value] pairs', () => {
        expect(objectExercise.convertObject({a: 1, b: 2, c: 3})).to.eql([ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]);
        expect(objectExercise.convertObject({
            a: null,
            b: '',
            c: undefined
        })).to.eql([ [ 'a', null ], [ 'b', '' ], [ 'c', undefined ] ]);
    });

    it('4. should return concated objects', () => {
        expect(objectExercise.objectMerge(
            {a: 1, b: 2, c: 3},
            {d: 4, e: 5, f: 6}
        )).to.eql({a: 1, b: 2, c: 3, d: 4, e: 5, f: 6});
        expect(objectExercise.objectMerge(
            {a: 1, b: null, c: {a: 1}},
            {d: {}, e: {q: {w: true}}, f: 6}
        )).to.eql({a: 1, b: null, c: {a: 1}, d: {}, e: {q: {w: true}}, f: 6});
    })
});