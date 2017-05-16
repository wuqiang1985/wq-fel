import comma from '../src/number/comma';
import getRandomInt from '../src/number/getRandomInt';
import pad from '../src/number/pad';
import chai from 'chai';

const expect = chai.expect;

describe('number扩展库测试', function() {
    it('comma:默认参数，隔3位加逗号', function() {
        expect(comma(6666666)).to.be.equal('6,666,666');
    });

    it('comma:隔2位加逗号', function() {
        expect(comma(6666666, 2)).to.be.equal('6,66,66,66');
    });

    it('getRandomInt', function() {
        expect(getRandomInt(1, 5)).to.be.oneOf([1, 2, 3, 4, 5]);
    });

    it('pad:默认参数（2），小于10', function() {
        expect(pad(9)).to.be.equal('09');
    });

    it('pad:默认参数（2），大于10', function() {
        expect(pad(11)).to.be.equal('11');
    });

    it('pad:输出3位数，小于10', function() {
        expect(pad(9, 3)).to.be.equal('009');
    });

    it('pad:输出3位数，小于100', function() {
        expect(pad(99, 3)).to.be.equal('099');
    });

    it('pad:输出3位数', function() {
        expect(pad(111, 3)).to.be.equal('111');
    });
});
