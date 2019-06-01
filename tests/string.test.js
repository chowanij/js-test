import { stringExercise } from '../exercises/srting';
import { expect } from 'chai';

describe('String', () => {
    it('1. should return reversed inputString', () => {
        expect(stringExercise.reverse('foo')).to.eql('oof');
        expect(stringExercise.reverse('1 2 3 4 ')).to.eql(' 4 3 2 1');
        expect(stringExercise.reverse('@$&*)$  ^^')).to.eql('^^  $)*&$@');
    });

    it('should check if input is a palindrom', () => {
        expect(stringExercise.isPalindrom('kajak')).to.eql(true);
        expect(stringExercise.isPalindrom('101')).to.eql(true);
        expect(stringExercise.isPalindrom('102')).to.eql(false);
        expect(stringExercise.isPalindrom('abcba')).to.eql(true);
    })
});