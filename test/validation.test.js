import isEmail from '../src/validation/isEmail';
import chai from 'chai';

const expect = chai.expect;

describe('验证库测试', function() {
    it('isEmail', function() {
        expect(isEmail('wuqiang@qq.com')).to.be.true;
    });
});
